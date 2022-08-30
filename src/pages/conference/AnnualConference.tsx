import React from 'react';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { CardBodyTextStyle } from '../../utilities/StyleHelper';

import AceLogo from './../../assets/BACB-ACE-475x325.png';

export default function AnnualConference(): JSX.Element {
  return (
    <>
      <MDBRow center className="row-eq-height">
        <MDBCol sm="8">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Annual Conference</MDBCardTitle>
              <MDBCardText style={CardBodyTextStyle}>
                The Society for the Quantitative Analyses of Behavior (SQAB) hosts a yearly
                conference coinciding with the Annual conference for the Association for Behavior
                Analysis International (ABAI). Topics span a range of human and non-human
                experimental research and both paper and poster sessions are offered.
                <br />
                <br />
                <strong>Registration for SQAB 2023 remains is not yet open.</strong>
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow
        className="d-flex justify-content-center"
        style={{
          paddingTop: '20px',
          paddingBottom: '20px',
        }}
      >
        <img src={AceLogo} alt="ACE logo"></img>
      </MDBRow>
    </>
  );
}
