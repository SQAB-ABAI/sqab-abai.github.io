import React from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCardImage,
} from 'mdb-react-ui-kit';

import Logo from "../components/Logo";
import CarouselConference from "../components/CarouselConference";
import CarouselTutorial from "../components/CarouselTutorial";

/*

        <div className="container">


            <hr className="extra-margin" />
            <br />

            <div className="row">
                <div className="col-lg-7">
                    <div className="well">
                        <div id="myCarousel" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                                <li data-target="#myCarousel" data-slide-to="1"></li>
                                <li data-target="#myCarousel" data-slide-to="2"></li>
                                <li data-target="#myCarousel" data-slide-to="3"></li>
                                <li data-target="#myCarousel" data-slide-to="4"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="d-block w-100" src="img/symp-5.jpeg" alt="" />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/symp-2.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/symp-3.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/symp-4.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/symp-1.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                            </div>

                            <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="right carousel-control"
                                href="#myCarousel"
                                data-slide="next"
                            >
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="well">
                        <h2 className="post-title">2022 Annual Conference</h2>
                        <p className="lead">
                            The Society for the Quantitative Analyses of Behavior (SQAB) hosts a
                            yearly conference coinciding with the Annual conference for the
                            Association for Behavior Analysis International (ABAI). Topics span a
                            range of human and non-human experimental research and both paper and
                            poster sessions are offered.
                        </p>
                        <p className="lead">
                            SQAB 2022 will take place May 26 & 27 in Boston, MA. Additional
                            information is be listed in the Annual Conference page.
                        </p>
                        <div className="read-more">
                            <a href="Conference.html" className="btn btn-info btn-block btn-raised"
                            >Learn More</a
                            >
                        </div>
                    </div>
                </div>
            </div>

            <hr className="extra-margin" />
            <br />

            <div className="row">
                <div className="col-lg-7">
                    <div className="well">
                        <div id="myCarousel2" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#myCarousel2"
                                    data-slide-to="0"
                                    className="active"
                                ></li>
                                <li data-target="#myCarousel2" data-slide-to="1"></li>
                                <li data-target="#myCarousel2" data-slide-to="2"></li>
                                <li data-target="#myCarousel2" data-slide-to="3"></li>
                                <li data-target="#myCarousel2" data-slide-to="4"></li>
                                <li data-target="#myCarousel2" data-slide-to="5"></li>
                                <li data-target="#myCarousel2" data-slide-to="6"></li>
                                <li data-target="#myCarousel2" data-slide-to="7"></li>
                                <li data-target="#myCarousel2" data-slide-to="8"></li>
                                <li data-target="#myCarousel2" data-slide-to="9"></li>
                            </ol>

                            <div className="carousel-inner">
                                <div className="item active">
                                    <img className="d-block w-100" src="img/tut-11.jpeg" alt="" />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-12.JPG"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-13.JPG"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-4.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-5.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-6.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-7.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-8.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-9.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                                <div className="item">
                                    <img
                                        className="d-block w-100"
                                        src="img/tut-10.jpeg"
                                        alt="Second slide"
                                    />
                                </div>
                            </div>

                            <a
                                className="left carousel-control"
                                href="#myCarousel2"
                                data-slide="prev"
                            >
                                <span className="sr-only">Previous</span>
                            </a>
                            <a
                                className="right carousel-control"
                                href="#myCarousel2"
                                data-slide="next"
                            >
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="well">
                        <h2 className="post-title">Invited Tutorials</h2>
                        <p className="lead">
                            In addition to paper and poster sessions, SQAB arranges for experts in
                            various areas of research to provide introductory tutorials. These are
                            offered as a means for encouraging dissemination of novel methods and
                            approaches.
                        </p>
                        <div className="read-more">
                            <a href="Tutorial.html" className="btn btn-info btn-block btn-raised"
                            >Learn More</a
                            >
                        </div>
                    </div>
                </div>
            </div>

            <hr className="extra-margin" />
            <br />
        </div>
*/

export default function Home(): JSX.Element {
    return <>

        <MDBRow className="d-flex justify-content-center" style={{ paddingTop: '20px', paddingBottom: '20px', }}>
            <Logo />
        </MDBRow>

        <MDBRow center>
            <MDBCol sm='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Ethics and Diversity Policy</MDBCardTitle>
                        <MDBCardText>
                            The Society for the Quantitative Analyses of Behavior (SQAB) encourages diversity, inclusiveness, and freedom from discriminatory behavior in the field of behavioral science broadly, and within the organization specifically. Diversity refers to differences in race, ethnicity, sexual orientation, gender identity, age, country of origin, religious or spiritual beliefs, ability, and social and economic class.
                            <br /><br />
                            The ethics and diversity policy was approved by the SQAB Executive Board in 2018 and was based on those developed by ABAI with the approval of ABAI..
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Society for the Quantitative Analyses of Behavior</MDBCardTitle>
                        <MDBCardText>
                            The Society for the Quantitative Analyses of Behavior (SQAB) was founded in 1978 by M. L. Commons and J. A. Nevin to present and publish material which bring a quantitative analysis to bear on the understanding of behavior. A brief history is available. The International Society holds its annual meeting in conjunction with the Association for Behavior Analysis International (ABAI). Talks at SQAB focus on the development and use of mathematical formulations to: characterize one or more dimensions of an obtained data set, derive predictions to be compared with data, and generate novel data analyses.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <hr className="additional-margin" />

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
                                <MDBBtn className="float-right" tag='a' href='#'>Learn More</MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <hr className="additional-margin" />

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
                                <MDBBtn className="float-right" tag='a' href='#'>Learn More</MDBBtn>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <hr className="extra-margin" />
        <br />

    </>
        ;
}