import React, { Component } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader
} from "mdbreact";
import SectionContainer from "./../sectionContainer";
export class Notice extends Component {
  render() {
    return (
      <SectionContainer>
        <MDBCard border="info" style={{ marginTop: 70 }}>
          <MDBCardHeader>ArtsClub</MDBCardHeader>
          <MDBCardBody className="text-info">
            <MDBCardTitle tag="h5">Sun/25/2019</MDBCardTitle>
            <MDBCardText>
              image finder Front End With React. search what ever You like image
              type & still upgrading and adding addtional features
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      </SectionContainer>
    );
  }
}

export default Notice;
