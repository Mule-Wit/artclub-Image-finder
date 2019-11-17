import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,
  MDBInput,
  MDBIcon,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBEdgeHeader
} from "mdbreact";

export default class About extends Component {
  render() {
    return (
      <div>
        <MDBEdgeHeader className="sectionPage gradient-1 " />

        <MDBCol sm="5">
          <MDBContainer>
            <MDBCard>
              <MDBCardImage
                src={require("../../img/Write.jpg")}
                alt="MDBCard image cap"
                top
                hover
                overlay="white-slight"
                className="z-depth-3"
              />
              <MDBCardBody>
                <form name="contact" method="POST" data-netlify="true">
                  <p className="h5 text-center mb-4">Write To Us</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      name="name"
                      id="name"
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      id="email"
                      name="email"
                    />

                    <MDBInput
                      type="textarea"
                      rows="2"
                      label="Your message"
                      name="message"
                      id="message"
                      icon="pencil-alt"
                    />

                    <div data-netlify-recaptcha="true"></div>
                  </div>
                  <div className="text-center">
                    <MDBBtn
                      type="submit"
                      value="Send Message"
                      outline
                      color="info"
                    >
                      Send <MDBIcon icon="paper-plane" className="ml-1" />
                    </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </MDBCol>
        <MDBFooter color="near-moon-gradient" className="font-small pt-5 mt-5">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Dev's</h5>
                <p></p>
              </MDBCol>
              <MDBCol md="6" className="align-items-center">
                <h5 className="title">Contact US</h5>
                <ul>
                  <li className="list-unstyled mb-2">
                    <MDBIcon
                      fab
                      icon="facebook-f"
                      className="mr-2 "
                      size="2x"
                    />
                    <a href="https://www.facebook.com/profile.php?id=100015146529072">
                      Facebook
                    </a>
                  </li>
                  <li className="list-unstyled mb-2 ">
                    <MDBIcon fab icon="telegram" className="mr-2" size="2x" />
                    <a href="https://t.me/Yamnoh">telegram</a>
                  </li>
                  <li className="list-unstyled mb-2">
                    <MDBIcon
                      fab
                      icon="google-plus"
                      className="mr-2"
                      size="2x"
                    />
                    <a href="https://mail.google.com/">Myoni7634@gmail.com</a>
                  </li>
                  <li className="list-unstyled mb-2">
                    <MDBIcon fab icon="github" className="mr-2" size="2x" />
                    <a href="https://github.com/Mule-Wit/">Github</a>
                  </li>
                </ul>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <div className="footer-copyright text-center py-3">
            <MDBContainer fluid>
              &copy; {new Date().getFullYear()} Copyright:{" "}
              <a href="https://www.ArtClub.com"> ArtClub.com </a>
            </MDBContainer>
          </div>
        </MDBFooter>
      </div>
    );
  }
}
