import React, { useState } from "react";

import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBIcon,
    MDBDropdownItem,
} from 'mdb-react-ui-kit';

/**
        <div className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <a className="navbar-brand" href="index.html">SQAB</a>
                </div>
                <div className="navbar-collapse collapse navbar-responsive-collapse">
                    <ul className="nav navbar-nav">
                        <li className="dropdown">
                            <a href="#" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Conference<b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="Conference.html">Annual Conference </a></li>
                                <li><a href="Tutorial.html">Recorded Tutorials</a></li>
                                <li><a href="Registration.html">Registration </a></li>
                                <li><a href="Submission.html">Submissions </a></li>
                                <li><a href="Programs.html">Programs &amp; Newsletters </a></li>
                            </ul>
                        </li>

                        <li className="dropdown">
                            <a href="#" data-target="#" className="dropdown-toggle" data-toggle="dropdown">Resources<b className="caret"></b></a>
                            <ul className="dropdown-menu">
                                <li><a href="DemandCurveAnalyzer.html">Demand Curve Analyzer </a></li>
                                <li><a href="DiscountingModelSelector.html">Discounting Model Selector </a></li>
                                <li><a href="AnalyticPmax.html">Exact Solution P<sub>MAX</sub> </a></li>
                                <li><a href="Resources.html">Resource Links </a></li>
                            </ul>
                        </li>

                        <li><a href="BehavioralProcesses.html">Behavioral Processes</a></li>
                        <li><a href="Board.html">Executive Board</a></li>
                        <li><a href="#" data-toggle="modal" data-target="#privacyModal">Privacy </a></li>
                        <li><a href="#" data-toggle="modal" data-target="#listservModal">Listserv </a></li>
                    </ul>
                </div>
            </div>
        </div>
 */

export default function Header() {
    const [showBasic, setShowBasic] = useState(false);

    const navbarTextStyle = { color: 'white' };

    return (
        <MDBNavbar expand='lg' style={{ backgroundColor: '#7f007f' }}>
            <MDBContainer fluid>
                <MDBNavbarBrand href='/' style={navbarTextStyle}>
                    SQAB
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBDropdown style={navbarTextStyle}>
                                <MDBDropdownToggle tag='a' className='nav-link'>
                                    Conference
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link href="/conference">Annual Conference</MDBDropdownItem>
                                    <MDBDropdownItem link href="/tutorials/-1">Recorded Tutorials</MDBDropdownItem>
                                    <MDBDropdownItem link href="/registration">Registration</MDBDropdownItem>
                                    <MDBDropdownItem link href="/submission">Submissions</MDBDropdownItem>
                                    <MDBDropdownItem link href="/records">Programs and Newsletters</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown style={navbarTextStyle}>
                                <MDBDropdownToggle tag='a' className='nav-link'>
                                    Resources
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link>Demand Curve Analyzer</MDBDropdownItem>
                                    <MDBDropdownItem link>Discounting Model Selector</MDBDropdownItem>
                                    <MDBDropdownItem link>Exact Solution Pmax</MDBDropdownItem>
                                    <MDBDropdownItem link>Resource Links</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/behavioralprocesses' style={navbarTextStyle}>
                                Behavioral Processes
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#' style={navbarTextStyle}>
                                Executive Board
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#' style={navbarTextStyle}>
                                Privacy
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#' style={navbarTextStyle}>
                                Listserv
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );

}
