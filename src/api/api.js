import fetchJsonp from 'fetch-jsonp'

import { endpoint, guid } from '../config/api'

const fetchBusinessByName = (name) => {
  const query = `${endpoint}MatchingNames.aspx?name=${name}&callback=callback&guid=${guid}`

  return fetchJsonp(query, {
    jsonpCallbackFunction: 'callback',
  })
}

const fetchBusinessByABN = (abn) => {
  const query = `${endpoint}AbnDetails.aspx?abn=${abn}&callback=callback&guid=${guid}`

  return fetchJsonp(query, {
    jsonpCallbackFunction: 'callback',
  })
}

export { fetchBusinessByName, fetchBusinessByABN }
