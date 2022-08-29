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
import AnnualConference from './pages/conference/AnnualConference'
import Tutorial from './pages/tutorials/Tutorials'

const mainContainerStyle = {
  flexGrow: 1,
  paddingLeft: '0',
  paddingRight: '0',
}

const contentContainerStyle = {
  paddingTop: '20px',
  paddingBottom: '20px',
}

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
            <div style={contentContainerStyle}>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/conference">
                  <AnnualConference />
                </Route>
                <Route path="/tutorials/:videoId">
                  <Tutorial />
                </Route>
              </Switch>
            </div>
            <Footer />
          </MDBContainer>
        </BrowserRouter>
      }
    </>
  )
}

export default App
