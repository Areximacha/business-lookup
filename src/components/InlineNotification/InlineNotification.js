import React from 'react'
import PropTypes from 'prop-types'

import NotificationWrapper from './InlineNotification.style'

const InlineNotification = ({ message }) => (
  <NotificationWrapper>
    <h4>{message}</h4>
  </NotificationWrapper>
)

InlineNotification.propTypes = {
  message: PropTypes.string.isRequired,
}

export default InlineNotification
