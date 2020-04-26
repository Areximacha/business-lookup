import React from 'react'
import PropTypes from 'prop-types'

import { CardWrapper, CardHeading } from './BusinessDetailsCard.style'

const BusinessDetailsCard = ({ businessData }) => (
  <CardWrapper>
    <CardHeading>{businessData.EntityName}</CardHeading>
    <p>{`State: ${businessData.AddressState}`}</p>
    <p>{`Postcode: ${businessData.AddressPostcode}`}</p>
  </CardWrapper>
)

BusinessDetailsCard.propTypes = {
  businessData: PropTypes.object.isRequired,
}

export default BusinessDetailsCard
