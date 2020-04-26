import React from 'react'

import Layout from '../../components/Layout'

import BusinessLookupContainer from '../../containers/BusinessLookup/BusinessLookup'

import MainHeading from './BusinessLookup.style'

const BusinessLookup = () => (
  <Layout>
    <MainHeading>Business Lookup</MainHeading>
    <BusinessLookupContainer />
  </Layout>
)

export default BusinessLookup
