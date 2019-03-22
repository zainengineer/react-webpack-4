import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import { Body } from './Styled'

const Home = () => <Async load={import('./Home')} />

const App = ({ user }) => (
  <Body>
    <Header />
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/zhome" component={Home} />
      <Redirect to="/zhome" />
    </Switch>
  </Body>
)

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default withRouter(connect(state => ({ user: state.user }))(App))
