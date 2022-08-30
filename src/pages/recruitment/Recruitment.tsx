import React from 'react';

import { MDBCard, MDBCardBody, MDBCardTitle, MDBRow, MDBCol } from 'mdb-react-ui-kit';

import { MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';

import recruitmentJson from './../../assets/recruitment.json';

import './Recruitment.css';

export default function Recruitment(): JSX.Element {
  return (
    <>
      <MDBRow center className="row-eq-height">
        <MDBCol sm="11">
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle>Graduate Student Recruitment</MDBCardTitle>

              <MDBTable responsive>
                <MDBTableHead>
                  <tr>
                    <th className="recruitment-table-th" scope="col">
                      Mentor/Contact
                    </th>
                    <th className="recruitment-table-th" scope="col">
                      Mentor Information
                    </th>
                    <th className="recruitment-table-th" scope="col">
                      Description of Lab/Program
                    </th>
                    <th className="recruitment-table-th" scope="col">
                      Cycle
                    </th>
                    <th className="recruitment-table-th" scope="col">
                      Site
                    </th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {recruitmentJson.map((recr) => {
                    return (
                      <tr className="recruitment-table-tr">
                        <td scope="row">
                          <a className="fw-normal mb-1" href={`mailto:${recr.Contact}`}>
                            {recr.Mentor}
                          </a>
                          <p className="text-muted mb-0">{recr.Institution}</p>
                        </td>
                        <td>{recr.Bio}</td>
                        <td>{recr.Description}</td>
                        <td>{recr.Cycle}</td>
                        <td>{recr.Link.trim().length === 0 ? '' : <a href={recr.Link}>Link</a>}</td>
                      </tr>
                    );
                  })}
                </MDBTableBody>
              </MDBTable>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </>
  );
}
