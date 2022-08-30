import React from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

import { CardBodyTextStyle } from "../../utilities/StyleHelper"

import resourcesJson from './../../assets/resources.json';

import "./Resources.css"

export default function Resources(): JSX.Element {
    return <>
        <MDBRow center className="row-eq-height">
            <MDBCol sm='8'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>SQAB Resources</MDBCardTitle>
                        <MDBCardText style={CardBodyTextStyle}>
                            As an aide in disseminating experimental research, the SQAB board has curated information and materials from a range of Laboratories and research outlets.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <MDBRow center className="justify-content-center">
            <MDBCol sm='8'>
                <h4 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }} >Past Leadership</h4>
            </MDBCol>
        </MDBRow>

        <MDBRow center className="row-eq-height">
            <MDBCol sm='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Current Labs</MDBCardTitle>
                        <ul className="resources-ul">
                            {resourcesJson.Labs.map((lab) => {
                                return <li
                                    key={`lab-${lab.Name}`}>
                                    <p>{`${lab.Name}; ${lab.University} (${lab.PI})`}{""}
                                        <a href={`${lab.Location}`}> [Link]</a>
                                    </p>
                                </li>
                            })}
                        </ul>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Peer-reviewed Tools</MDBCardTitle>
                        <ul className="resources-ul">
                            {resourcesJson.Tools.map((tool) => {
                                return <li
                                    key={`tool-${tool.Name}`}>
                                    <p>{`${tool.Name} (${tool.Type})`}{""}
                                        <a href={`${tool.Location}`}> [Link]</a>
                                    </p>
                                </li>
                            })}
                        </ul>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <MDBRow center className="justify-content-center">
            <MDBCol sm='8'>
                <h4 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }} >Past Leadership</h4>
            </MDBCol>
        </MDBRow>

        <MDBRow center className="row-eq-height">
            <MDBCol sm='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Books, Special Issues</MDBCardTitle>
                        <ul className="resources-ul">
                            {resourcesJson.Books.map((book) => {
                                return <li
                                    key={`book-${book.Name}`}>
                                    <p>{`${book.Name}`}{""}
                                        <a href={`${book.Location}`}> [Link]</a>
                                    </p>
                                </li>
                            })}

                            {resourcesJson.SpecialIssues.map((si) => {
                                return <li
                                    key={`si-${si.Name}`}>
                                    <p>{`${si.Name}`}{""}
                                        <a href={`${si.Location}`}> [Link]</a>
                                    </p>
                                </li>
                            })}
                        </ul>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Computer Software</MDBCardTitle>
                        <ul className="resources-ul">
                            {resourcesJson.Software.map((software) => {
                                return <li
                                    key={`software-${software.Name}`}>
                                    <p>{`${software.Name}`}{""}
                                        <a href={`${software.Location}`}> [Link]</a>
                                    </p>
                                </li>
                            })}
                        </ul>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

    </>;
}