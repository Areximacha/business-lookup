import React from 'react'
import { render } from '@testing-library/react'

import BusinessDetailsCard from './BusinessDetailsCard'

describe('<BusinessDetailsCard', () => {
  const initProps = {
    businessData: {
      EntityName: 'Awesome Company',
      AddressState: 'AZ',
      AddressPostcode: '1701',
    },
  }
  describe('@render', () => {
    it('should render correctly given the initial props', () => {
      const { getByText } = render(<BusinessDetailsCard {...initProps} />)

      expect(getByText(initProps.businessData.EntityName)).toBeTruthy()
      expect(
        getByText(`State: ${initProps.businessData.AddressState}`)
      ).toBeTruthy()
      expect(
        getByText(`Postcode: ${initProps.businessData.AddressPostcode}`)
      ).toBeTruthy()
    })
  })
})
