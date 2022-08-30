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
import Registration from './pages/registration/Registration'
import Submission from './pages/submissions/Submission'
import Records from './pages/records/Records'
import BeProcInformation from './pages/bproc/BeProcInformation'
import ExecutiveBoard from './pages/eboard/ExecutiveBoard'
import Resources from './pages/resources/Resources'

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
                <Route path="/registration">
                  <Registration />
                </Route>
                <Route path="/submission">
                  <Submission />
                </Route>
                <Route path="/records">
                  <Records />
                </Route>
                <Route path="/behavioralprocesses">
                  <BeProcInformation />
                </Route>
                <Route path="/executiveboard">
                  <ExecutiveBoard />
                </Route>
                <Route path="/resources">
                  <Resources />
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
