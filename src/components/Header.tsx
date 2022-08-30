import React, { useState } from 'react';

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
  MDBBtn,
} from 'mdb-react-ui-kit';

import { Link } from 'react-router-dom';

import Modal from 'react-modal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '50%',
    maxHeight: '50%',
  },
};

const navbarTextStyle = { color: 'white' };

export default function Header(): JSX.Element {
  const [showBasic, setShowBasic] = useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalIsOpen2, setIsOpen2] = useState<boolean>(false);

  function openModal(): void {
    setIsOpen(true);
  }

  function closeModal(): void {
    setIsOpen(false);
  }

  function openModal2(): void {
    setIsOpen2(true);
  }

  function closeModal2(): void {
    setIsOpen2(false);
  }

  const hideRecruitment = true;

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={false}
        preventScroll={true}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Privacy</h2>
        <div className="navbar-modal">
          <p className="navbar-modal-p">
            This site uses no cookies and performs no tracking. Various calculators are provided to
            perform certain analyses, though none of this information is ever saved. Nearly all of
            the calculations are performed without ever leaving your machine. There is some logging
            (i.e., diagnostic) performed by the server host, though this information is necessary
            for regular functioning and is regularly disposed over within the shortest intervals
            permitted.
          </p>
        </div>

        <MDBBtn
          noRipple
          className="float-right"
          tag="a"
          href="#"
          onClick={() => {
            closeModal();
          }}
        >
          Close
        </MDBBtn>
      </Modal>

      <Modal
        isOpen={modalIsOpen2}
        onRequestClose={closeModal2}
        shouldCloseOnOverlayClick={false}
        preventScroll={true}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Listserv</h2>
        <div className="navbar-modal">
          <p className="navbar-modal-p">
            This site uses no cookies and performs no tracking. Various calculators are provided to
            perform certain analyses, though none of this information is ever saved. Nearly all of
            the calculations are performed without ever leaving your machine. There is some logging
            (i.e., diagnostic) performed by the server host, though this information is necessary
            for regular functioning and is regularly disposed over within the shortest intervals
            permitted.
          </p>

          <p>
            SQAB maintains an active listserv with over 400 members. Prospective members may access
            this resource by consulting the following webpage:{' '}
          </p>
          <a
            href="https://mailmanlists.us/mailman/listinfo/sqab"
            style={{ color: 'rgb(127, 0, 127)' }}
          >
            https://mailmanlists.us/mailman/listinfo/sqab
          </a>
          <br />
          <br />

          <p>
            <b>Frequently Asked Questions:</b>
            <br />
            <br />
            <i>Why is there another new listserv?</i>
            <br />
            <br />
            The prior MailMan listserv hosting company no longer operates. Your settings and contact
            information has been migrated to the new location.
            <br />
            <br />
            <i>How does the SQAB listserv work?</i>
            <br />
            <br />
            <i>How is this listserv different?</i>
            <br />
            <br />
            The new listserv is the same as the previous. MailMan does not require an account with
            Yahoo or any other third party. Rather, you simply use an email of your choice and
            select a password. It is good to note that MailMan suggests avoiding the use of
            'valuable' passwords. This is because password changes are sent via email and this is
            not a secure process (i.e., do not use a password also used with sensitive accounts).
            <br />
            <br />
            The MailMan service allows readers to (optionally) receive updates in the form of
            'digests.' Digests are a way to get updates from the listserv without receiving dozens
            of updates in the span of a day. That is, a single email digest will provide updates to
            users if so desired. Digests are generally preferred by users who do not wish to be
            receive a notification on their phone or email client following every single interaction
            on the listserv (most users do opt for a digest to avoid this very issue).
            <br />
            <br />
            Various features exist beyond those explicitly noted here and users are encouraged to
            review these settings to customize their individual settings to best match their
            preferences.
            <br />
            <br />
            MailMan has a template-based manner of sending emails and this has a high likelihood of
            being picked up as SPAM (i.e., it can look like unsolicited messaging. As a result, we
            suggest you immediately whitelist this sender from your email client's SPAM filtering.
            <br />
            <br />
            <b>Getting Started:</b>
            <br />
            <br />
            <i>Current Listserv Members</i>
            <br />
            <br />
            You will be sent an invitation to create a password the week before Yahoo Groups closes
            (12/8/20). You will not need to create a new account.
            <br />
            <br />
            <i>Prospective Listserv Members</i>
            <br />
            <br />
            Those interested in participating in the listserv may visit the listserv page for
            information on how to apply to be included on the listserv:{' '}
            <a
              href="https://mailmanlists.us/mailman/listinfo/sqab"
              style={{ color: 'rgb(127, 0, 127)' }}
            >
              https://mailmanlists.us/mailman/listinfo/sqab
            </a>
          </p>
        </div>

        <MDBBtn
          noRipple
          className="float-right"
          tag="a"
          href="#"
          onClick={() => {
            closeModal2();
          }}
        >
          Close
        </MDBBtn>
      </Modal>

      <MDBNavbar expand="lg" style={{ backgroundColor: '#7f007f' }}>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/" style={navbarTextStyle}>
            SQAB
          </MDBNavbarBrand>

          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShowBasic(!showBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>

          <MDBCollapse navbar show={showBasic}>
            <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
              <MDBNavbarItem>
                <MDBDropdown style={navbarTextStyle}>
                  <MDBDropdownToggle tag="a" className="nav-link mr-2">
                    Conference
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>
                      <Link to="/conference">Annual Conference</Link>
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/tutorials/-1">
                      Recorded Tutorials
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/registration">
                      Registration
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/submission">
                      Submissions
                    </MDBDropdownItem>
                    <MDBDropdownItem link href="/records">
                      Programs and Newsletters
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBDropdown style={navbarTextStyle}>
                  <MDBDropdownToggle tag="a" className="nav-link mr-2">
                    Resources
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Demand Curve Analyzer (Offline)</MDBDropdownItem>
                    <MDBDropdownItem link>Discounting Model Selector (Offline)</MDBDropdownItem>
                    <MDBDropdownItem link>Exact Solution Pmax (Offline)</MDBDropdownItem>
                    <MDBDropdownItem link href="/resources">
                      Resource Links
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/behavioralprocesses"
                  className="mr-2"
                  style={navbarTextStyle}
                >
                  Behavioral Processes
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="/executiveboard"
                  className="mr-2"
                  style={navbarTextStyle}
                >
                  Executive Board
                </MDBNavbarLink>
              </MDBNavbarItem>

              {!hideRecruitment && (
                <MDBNavbarItem>
                  <MDBNavbarLink
                    active
                    aria-current="page"
                    href="/recruitment"
                    className="mr-2"
                    style={navbarTextStyle}
                  >
                    Recruitment
                  </MDBNavbarLink>
                </MDBNavbarItem>
              )}

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  onClick={() => openModal()}
                  className="mr-2"
                  style={navbarTextStyle}
                >
                  Privacy
                </MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink
                  active
                  aria-current="page"
                  href="#"
                  onClick={() => openModal2()}
                  className="mr-2"
                  style={navbarTextStyle}
                >
                  Listserv
                </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
