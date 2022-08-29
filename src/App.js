import React from 'react'
import { useEffect } from 'react'

import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom'

import { MDBContainer } from 'mdb-react-ui-kit'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home/Home'

const mainContainerStyle = { flexGrow: 1, padding: '0' }

function App() {
  useEffect(() => {
    document.title = 'SQAB'
  }, [])

  return (
    <>
      {
        <BrowserRouter>
          <MDBContainer fluid style={mainContainerStyle}>
            <Header />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </MDBContainer>
        </BrowserRouter>
      }
    </>
  )
}

export default App
