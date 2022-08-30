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

import Program2004 from './../../assets/programs/2004.pdf';
import Program2005 from './../../assets/programs/2005.pdf';
import Program2006 from './../../assets/programs/2006.pdf';
import Program2007 from './../../assets/programs/2007.pdf';
// TODO: need 2008
import Program2009 from './../../assets/programs/2009.pdf';
import Program2010 from './../../assets/programs/2010.pdf';
import Program2011 from './../../assets/programs/2011.pdf';
import Program2012 from './../../assets/programs/2012.pdf';
import Program2013 from './../../assets/programs/2013.pdf';
import Program2014 from './../../assets/programs/2014.pdf';
import Program2015 from './../../assets/programs/2015.pdf';
import Program2016 from './../../assets/programs/2016.pdf';
import Program2017 from './../../assets/programs/2017.pdf';
import Program2018 from './../../assets/programs/2018.pdf';
import Program2019 from './../../assets/programs/2019.pdf';
import Program2020 from './../../assets/programs/2020-contact.pdf';
import Program2021 from './../../assets/programs/2021.pdf';
import Program2022 from './../../assets/programs/2022.pdf';


import Newsletter2005 from './../../assets/newsletters/2005.pdf';
import Newsletter2006 from './../../assets/newsletters/2006.pdf';
// TODO: need 2007
import Newsletter2008 from './../../assets/newsletters/2008.pdf';
import Newsletter2009 from './../../assets/newsletters/2009.pdf';
// TODO: need 2010
import Newsletter2011 from './../../assets/newsletters/2011.pdf';
import Newsletter2012 from './../../assets/newsletters/2012.pdf';
import Newsletter2013 from './../../assets/newsletters/2013.pdf';
import Newsletter2014 from './../../assets/newsletters/2014.pdf';
import Newsletter2015 from './../../assets/newsletters/2015.pdf';
import Newsletter2016 from './../../assets/newsletters/2016.pdf';
import Newsletter2017 from './../../assets/newsletters/2017.pdf';
import Newsletter2018 from './../../assets/newsletters/2018.pdf';
import Newsletter2019 from './../../assets/newsletters/2019.pdf';
import Newsletter2020 from './../../assets/newsletters/2020.pdf';
// TODO: need 2021
import Newsletter2022 from './../../assets/newsletters/2022.pdf';

import "./Records.css";

const Programs = [
    {
        "Year": 2004,
        "Path": Program2004
    },
    {
        "Year": 2005,
        "Path": Program2005
    },
    {
        "Year": 2006,
        "Path": Program2006
    },
    {
        "Year": 2007,
        "Path": Program2007
    },
    {
        "Year": 2009,
        "Path": Program2009
    },
    {
        "Year": 2010,
        "Path": Program2010
    },
    {
        "Year": 2011,
        "Path": Program2011
    },
    {
        "Year": 2012,
        "Path": Program2012
    },
    {
        "Year": 2013,
        "Path": Program2013
    },
    {
        "Year": 2014,
        "Path": Program2014
    },
    {
        "Year": 2015,
        "Path": Program2015
    },
    {
        "Year": 2016,
        "Path": Program2016
    },
    {
        "Year": 2017,
        "Path": Program2017
    },
    {
        "Year": 2018,
        "Path": Program2018
    },
    {
        "Year": 2019,
        "Path": Program2019
    },
    {
        "Year": 2020,
        "Path": Program2020
    },
    {
        "Year": 2021,
        "Path": Program2021
    },
    {
        "Year": 2022,
        "Path": Program2022
    }
];

const Newsletters = [
    {
        "Year": 2005,
        "Path": Newsletter2005
    },
    {
        "Year": 2006,
        "Path": Newsletter2006
    },
    {
        "Year": 2008,
        "Path": Newsletter2008
    },
    {
        "Year": 2009,
        "Path": Newsletter2009
    },
    {
        "Year": 2011,
        "Path": Newsletter2011
    },
    {
        "Year": 2012,
        "Path": Newsletter2012
    },
    {
        "Year": 2013,
        "Path": Newsletter2013
    },
    {
        "Year": 2014,
        "Path": Newsletter2014
    },
    {
        "Year": 2015,
        "Path": Newsletter2015
    },
    {
        "Year": 2016,
        "Path": Newsletter2016
    },
    {
        "Year": 2017,
        "Path": Newsletter2017
    },
    {
        "Year": 2018,
        "Path": Newsletter2018
    },
    {
        "Year": 2019,
        "Path": Newsletter2019
    },
    {
        "Year": 2020,
        "Path": Newsletter2020
    },
    {
        "Year": 2022,
        "Path": Newsletter2022
    }];

export default function Records(): JSX.Element {

    return <>
        <MDBRow center className="row-eq-height">
            <MDBCol sm='8'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Yearly Programs and Newsletters</MDBCardTitle>
                        <MDBCardText style={CardBodyTextStyle}>
                            Newsletters and Conference programs are retained for future reference in this location. They are also hosted online in the respective Github repository.
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
            <MDBCol sm='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Previous Programs</MDBCardTitle>
                        <ul className="records-ul">
                            {Programs.map((prog) => {
                                return <li key={`program-${prog.Year}`}>
                                    <a href={`${prog.Path}`}>
                                        <span>{`${prog.Year} SQAB Program`}</span>
                                    </a></li>
                            })}
                        </ul>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>

            <MDBCol md='4'>
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>Previous Newsletters</MDBCardTitle>
                        <ul className="records-ul">
                            {Newsletters.map((news) => {
                                return <li key={`news-${news.Year}`}>
                                    <a href={`${news.Path}`}>
                                        <span>{`${news.Year} SQAB Newsletter`}</span>
                                    </a></li>
                            })}
                        </ul>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    </>;
}