import React from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
} from 'mdb-react-ui-kit';

import Logo from "../../components/Logo";
import CarouselConference from "../../components/CarouselConference";
import CarouselTutorial from "../../components/CarouselTutorial";

import './Home.css'

export default function Home(): JSX.Element {
    return <>

        <MDBRow className="d-flex justify-content-center" style={{ paddingBottom: '20px', }}>
            <Logo />
        </MDBRow>

        <MDBRow center className="row-eq-height">
            <MDBCol sm='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Ethics and Diversity Policy</MDBCardTitle>
                        <MDBCardText>
                            The Society for the Quantitative Analyses of Behavior (SQAB) encourages diversity, inclusiveness, and freedom from discriminatory behavior in the field of behavioral science broadly, and within the organization specifically. Diversity refers to differences in race, ethnicity, sexual orientation, gender identity, age, country of origin, religious or spiritual beliefs, ability, and social and economic class.
                            <br /><br />
                            The ethics and diversity policy was approved by the SQAB Executive Board in 2018 and was based on those developed by ABAI with the approval of ABAI.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='4'>
                <MDBCard style={{ height: '100%' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Society for the Quantitative Analyses of Behavior</MDBCardTitle>
                        <MDBCardText>
                            The Society for the Quantitative Analyses of Behavior (SQAB) was founded in 1978 by M. L. Commons and J. A. Nevin to present and publish material which bring a quantitative analysis to bear on the understanding of behavior. A brief history is available. The International Society holds its annual meeting in conjunction with the Association for Behavior Analysis International (ABAI). Talks at SQAB focus on the development and use of mathematical formulations to: characterize one or more dimensions of an obtained data set, derive predictions to be compared with data, and generate novel data analyses.
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

        <MDBRow className='d-flex justify-content-center'>
            <MDBCol sm='8'>
                <MDBCard >
                    <MDBRow className='g-0'>
                        <MDBCol md='6'>
                            <CarouselConference />
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBCardBody>
                                <MDBCardTitle>2022 Annual Conference</MDBCardTitle>
                                <MDBCardText>
                                    The Society for the Quantitative Analyses of Behavior (SQAB) hosts a yearly conference coinciding with the Annual conference for the Association for Behavior Analysis International (ABAI). Topics span a range of human and non-human experimental research and both paper and poster sessions are offered.
                                    <br /><br />
                                    SQAB 2022 will take place May 26 & 27 in Boston, MA.Additional information is be listed in the Annual Conference page.
                                </MDBCardText>
                                <MDBBtn
                                    noRipple
                                    className="float-right"
                                    tag='a'
                                    href='/conference'
                                >
                                    Learn More
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <MDBRow center>
            <MDBCol sm='8'>
                <hr className="additional-margin" />
            </MDBCol>
        </MDBRow>

        <MDBRow className='d-flex justify-content-center'>
            <MDBCol sm='8'>
                <MDBCard >
                    <MDBRow className='g-0'>
                        <MDBCol md='6'>
                            <CarouselTutorial />
                        </MDBCol>
                        <MDBCol md='6'>
                            <MDBCardBody>
                                <MDBCardTitle>Invited Tutorials</MDBCardTitle>
                                <MDBCardText>
                                    In addition to paper and poster sessions, SQAB arranges for experts in various areas of research to provide introductory tutorials. These are offered as a means for encouraging dissemination of novel methods and approaches.
                                </MDBCardText>
                                <MDBBtn
                                    noRipple
                                    className="float-right"
                                    tag='a'
                                    href='/tutorials/-1'
                                >
                                    Learn More
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </>;
}