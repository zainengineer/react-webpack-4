import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { Message, Blue } from './Styled'

const Home = ({ user }) => (
  <Message>
    <Blue>testing</Blue>
  </Message>
)

Home.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default connect(state => ({ user: state.user }))(Home)
