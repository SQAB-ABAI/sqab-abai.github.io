import React from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

import "./BeProcInformation.css"

import specialIssueJson from './../../assets/specialissues.json';

export default function BeProcInformation(): JSX.Element {
    return <>
        <MDBRow center className="row-eq-height">
            <MDBCol sm='8'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Special Issues from The Society for the Quantitative Analyses of Behavior</MDBCardTitle>
                        <MDBCardText>
                            Special Issues are available through Open Access complements of Elsevier for six months following​ conference proceedings.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <MDBRow center>
            <MDBCol sm='8'>
                <hr className="additional-margin" />
            </MDBCol>
        </MDBRow>

        <MDBRow center className="row-eq-height">
            <MDBCol sm='8'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Available Tutorials</MDBCardTitle>
                        <ul className="beproc-ul">
                            {specialIssueJson.Specials.map((issue) => {
                                return <li
                                    key={`index-${issue.Title}`}>
                                    <a
                                        href={`http://www.sciencedirect.com/science/journal/03766357/${issue.Volume}/${issue.Issue}/`}>
                                        <span>
                                            {`Proceedings of SQAB ${issue.Year}: ${issue.Title}, Behavioural Processes, ${issue.Volume}(${issue.Issue}), ${issue.Pages}`}
                                        </span>
                                    </a>
                                </li>
                            })}
                        </ul>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </>;
}