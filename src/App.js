import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';

import { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  useEffect(() => {
    document.title = 'SQAB';
  }, []);

  return (
    <div
      style={{
        display: 'flex',
      }}
    >
      {
        <BrowserRouter>
          <MDBContainer fluid style={{ flexGrow: 1, padding: '0' }}>
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
    </div>
  );
}

export default App;
