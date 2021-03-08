// import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import {
  CssBaseline
} from '@material-ui/core'

import Login from './pages/Login'
import DataInput from './DataInput'
import DataList from './DataList'

export default function App() {
  return (
    <div className="app">
      <CssBaseline />

      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/input">
            <DataInput />
          </Route>
          <Route path="/list">
            <DataList />
          </Route>
          <Route path="/">
            <div>index</div>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}