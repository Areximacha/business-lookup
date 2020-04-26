import React from 'react'
import { render } from '@testing-library/react'

import InlineNotification from './InlineNotification'

describe('<InlineNotification />', () => {
  const initProps = {
    message: 'This is a warning.',
  }
  describe('@render', () => {
    it('should render correctly given initial props', () => {
      const { getByText } = render(<InlineNotification {...initProps} />)

      expect(getByText(initProps.message)).toBeTruthy()
    })
  })
})
