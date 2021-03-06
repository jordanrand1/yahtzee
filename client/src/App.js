import React from 'react';
import Game from './components/Game';
import { Route, Switch } from 'react-router-dom'
import { login, register, logout, loginUser } from './reducers/user'
import {
  ProtectedRoute,
  Login,
  Register,
  NavBar,
} from '@devpoint/dps-react-kit'
import FetchUser from './components/FetchUser'
import Scores from './components/Scores'

const App = () => (
  <>
    <NavBar handleLogout={login} />
    <FetchUser>
      <Switch>
        <ProtectedRoute exact path='/' component={Game} />
        <Route
          exact
          path='/login'
          render={ props => <Login {...props} handleLogin={loginUser} /> }
        />
        <Route
          exact
          path='/register'
          render={ props => <Register {...props} registerUser={register} /> }
        />
      </Switch>
    </FetchUser>
  </>
)

export default App