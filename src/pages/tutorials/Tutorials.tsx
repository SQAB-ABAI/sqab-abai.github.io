import React from 'react';

import { useParams } from 'react-router-dom';

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn,
} from 'mdb-react-ui-kit';

import { CardBodyTextStyle } from '../../utilities/StyleHelper';

import tutorialJson from './../../assets/tutorials.json';

import './Tutorials.css';
import IframeResizer from 'iframe-resizer-react';

export default function Tutorials(): JSX.Element {
  const { id } = useParams<{ id?: string }>();

  const showDirectory = id === undefined || parseInt(id) < 0 ? true : false;

  const videoInfo = !showDirectory ? tutorialJson.Tutorials[id] : null;

  console.log(showDirectory);

  const prevVideoId: number = parseInt(id) > 0 ? parseInt(id) + 1 : null;
  const nextVideoId: number = parseInt(id) >= 0 && parseInt(id) < 77 ? parseInt(id) + 1 : null;

  return (
    <>
      <MDBRow center className="row-eq-height">
        <MDBCol sm="8">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>SQAB Pre-eminent Tutorials</MDBCardTitle>
              <MDBCardText style={CardBodyTextStyle}>
                SQAB is committed to simplifying the transition to quantitative behavior analysis
                for students as well as advanced researchers. These videos of presentations from
                leaders in the field are at various levels and are appropriate for individual,
                classroom, and seminar use. Individual video presentations can be accessed by
                clicking on the appropriate links below. All of the videos can be accessed on our{' '}
                <a href="https://www.youtube.com/c/SocietyfortheQuantitativeAnalysesofBehavior">
                  YouTube channel
                </a>
                .
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>

      <MDBRow center>
        <MDBCol sm="8">
          <hr className="additional-margin" />
        </MDBCol>
      </MDBRow>

      {showDirectory && (
        <MDBRow center className="row-eq-height">
          <MDBCol sm="8">
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Available Tutorials</MDBCardTitle>
                <ul className="tutorials-ul">
                  {tutorialJson.Tutorials.map((tut) => {
                    return (
                      <li key={`index-${tut.Index}`}>
                        <a href={`/tutorials/${tut.Index}`}>
                          <span>{tut.Title}</span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      )}

      {!showDirectory && (
        <>
          <MDBRow center className="row-eq-height">
            <MDBCol sm="8">
              <MDBCard>
                <MDBCardBody>
                  <MDBCardTitle>{videoInfo.Title}</MDBCardTitle>

                  {videoInfo.Summary}

                  <IframeResizer
                    src={videoInfo.Video}
                    title={videoInfo.Title}
                    style={{
                      minWidth: '100%',
                      minHeight: '800px',
                      marginTop: '20px',
                    }}
                    allowFullScreen
                  />

                  {prevVideoId && (
                    <MDBBtn
                      noRipple
                      className="float-left"
                      tag="a"
                      href={`/tutorials/${prevVideoId}`}
                    >
                      Previous Video
                    </MDBBtn>
                  )}

                  {nextVideoId && (
                    <MDBBtn
                      noRipple
                      className="float-right"
                      tag="a"
                      href={`/tutorials/${nextVideoId}`}
                    >
                      Next Video
                    </MDBBtn>
                  )}
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </>
      )}
    </>
  );
}
