import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Login from './components/Login/Login'
import Chat from './components/Chat/Chat'

export default (
  <Provider store={store}>
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='chat' component={Chat} />
    </Switch>
  </Provider>
)
