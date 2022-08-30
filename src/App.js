import React from 'react';
import { useEffect } from 'react';

import { Route, Switch } from 'react-router-dom';

import { MDBContainer } from 'mdb-react-ui-kit';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/home/Home';
import AnnualConference from './pages/conference/AnnualConference';
import Tutorials from './pages/tutorials/Tutorials';
import Registration from './pages/registration/Registration';
import Submission from './pages/submissions/Submission';
import Records from './pages/records/Records';
import BeProcInformation from './pages/bproc/BeProcInformation';
import ExecutiveBoard from './pages/eboard/ExecutiveBoard';
import Resources from './pages/resources/Resources';
import Recruitment from './pages/recruitment/Recruitment';

const pageTitle = 'SQAB';

function App() {
  useEffect(() => {
    document.title = pageTitle;
  }, []);

  return (
    <MDBContainer
      fluid
      style={{
        flexGrow: 1,
        paddingLeft: '0',
        paddingRight: '0',
        backgroundColor: '#e3e3e3',
      }}
    >
      <Header />
      <div
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <Switch>
          <Route exact path="/conference">
            <AnnualConference />
          </Route>
          <Route exact path="/tutorials/:id">
            <Tutorials />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/submission">
            <Submission />
          </Route>
          <Route exact path="/records">
            <Records />
          </Route>
          <Route exact path="/behavioralprocesses">
            <BeProcInformation />
          </Route>
          <Route exact path="/executiveboard">
            <ExecutiveBoard />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/recruitment">
            <Recruitment />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </MDBContainer>
  );
}

export default App;
