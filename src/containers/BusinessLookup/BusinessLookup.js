import React, { useState } from 'react'

import { fetchBusinessByName, fetchBusinessByABN } from '../../api/api'

import InlineNotification from '../../components/InlineNotification/InlineNotification'
import BusinessDetailsCard from '../../components/BusinessDetailsCard/BusinessDetailsCard'

import {
  ResultSection,
  ListColumn,
  DetailsColumn,
  BusinessListItem,
  SearchSection,
  SearchForm,
  InputLabel,
} from './BusinessLookup.style'

const BusinessLookup = () => {
  const [businessName, setBusinessName] = useState('')
  const [abnCode, setAbnCode] = useState('')
  const [businessList, setBusinessList] = useState([])
  const [businessDetails, setBusinessDetails] = useState(null)
  const [error, setError] = useState('')
  const searchByName = async (e) => {
    e.preventDefault()
    setBusinessList([])
    setBusinessDetails(null)
    setError('')

    try {
      const response = await fetchBusinessByName(businessName)
      const result = await response.json()
      if (result.Message) {
        setError(result.Message)
      } else {
        setBusinessList(result.Names)
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.')
    }
  }

  const handleAbnSubmit = (e) => {
    e.preventDefault()
    setError('')
    setBusinessList([])
    searchByABN(abnCode)
  }

  const searchByABN = async (dataCode) => {
    try {
      const response = await fetchBusinessByABN(dataCode)
      const result = await response.json()
      if (result.Message) {
        setError(result.Message)
      } else {
        setBusinessDetails(result)
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.')
    }
  }

  const renderNameList = () =>
    businessList.map((currentNode) => (
      <BusinessListItem
        onClick={() => searchByABN(currentNode.Abn)}
        key={currentNode.Name}
      >
        {currentNode.Name}
      </BusinessListItem>
    ))

  return (
    <div>
      <SearchSection>
        <SearchForm onSubmit={searchByName}>
          <InputLabel>
            <span>Search by name: </span>
            <input
              type='text'
              name='name'
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </InputLabel>
          <input type='submit' value='submit' />
        </SearchForm>
        <SearchForm onSubmit={handleAbnSubmit}>
          <InputLabel>
            <span>Search by ABN: </span>
            <input
              type='text'
              name='ABN'
              onChange={(e) => setAbnCode(e.target.value)}
            />
          </InputLabel>
          <input type='submit' value='submit' />
        </SearchForm>
      </SearchSection>
      {error && <InlineNotification message={error} />}
      <ResultSection>
        <ListColumn>
          <ul>{renderNameList()}</ul>
        </ListColumn>
        <DetailsColumn>
          {businessDetails && (
            <BusinessDetailsCard businessData={businessDetails} />
          )}
        </DetailsColumn>
      </ResultSection>
    </div>
  )
}

export default BusinessLookup
