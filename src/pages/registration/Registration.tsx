import React from "react";

import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

export default function Registration(): JSX.Element {
    return <>

        <MDBRow center className="row-eq-height">
            <MDBCol sm='4'>
                <MDBCard style={{ height: '100%' }}>
                    <MDBCardBody>
                        <MDBCardTitle>SQAB Membership and Registration (2022)</MDBCardTitle>
                        <MDBCardText>
                            SQAB 2022 Membership is $20 and is payable through PayPal or surface mail. The membership fee is separate from registration fees.
                            <br /><br />
                            SQAB Membership includes six months of free electronic access to the Special Issue of Behavioural Processes, containing the proceedings of last year's SQAB meeting, beginning on the date of our conference.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol sm='4'>
                <MDBCard style={{ height: '100%' }}>
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
        </MDBRow>

        <MDBRow center>
            <MDBCol sm='8'>
                <hr className="additional-margin" />
            </MDBCol>
        </MDBRow>

        <MDBRow center className="row-eq-height">
            <MDBCol sm='8'>
                <MDBCard style={{ height: '100%' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Terms of Registration</MDBCardTitle>
                        <MDBCardText>
                            All attendees at SQAB events are expected to abide by SQAB's Ethics and Diversity policies. Discriminatory and derogatory language and behavior, as well as harassment of any kind, will not be tolerated at the SQAB conference.
                            <br /><br />
                            Anyone registering for the SQAB conference is required to accept the following:
                            <br /><br />
                            Your registration is acceptance of responsibility. By registering for the SQAB conference, you agree to abide by SQAB's Ethics and Diversity policies and understand that discriminatory and derogatory language and behavior, as well as harassment of any kind, will not be tolerated at SQAB. Failure to comply with the policy could result in suspension of membership to SQAB, revocation of rights to attend or submit future work to SQAB, and/or removal from the event, pursuant to Board consensus in consideration of the violation.
                            <br /><br />
                            Terms of Registration were approved by the SQAB Executive Board in 2018 and were based on those developed by ABAI with the approval of ABAI.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>

        <MDBRow center className="justify-content-center">
            <MDBCol sm='8'>
                <h4 style={{ textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }} >Online Membership and Registration</h4>
            </MDBCol>
        </MDBRow>

        <MDBRow center className="row-eq-height">
            <MDBCol sm='8'>
                <MDBCard style={{ height: '100%' }}>
                    <MDBCardBody>
                        <MDBCardTitle>Conference Registration</MDBCardTitle>
                        <MDBCardText>
                            Registration is closed.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </>;
}