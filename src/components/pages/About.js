import React, { Component } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBFooter,

  MDBIcon,

  MDBEdgeHeader
} from "mdbreact";

export default class About extends Component {
  render() {
    return (
      <div>
        <MDBEdgeHeader className="sectionPage gradient-1 " />


        <div class=" profile-card">
          <div class="mask-shadow"></div>
          <header>


            <a href="http://wit-blog.herokuapp.com/">
              <img alt="mule" src="https://en.gravatar.com/userimage/42992842/b8e8ff24d6f1cb84bbe5c839903086bb.png?size=200" />
            </a>


            <h1>Mulugeta</h1>

            <h2>WEB DESIGNER</h2>

          </header>


          <div class="profile-bio">

            <p>"The hardest thing when you think about focusing. You think focusing is about saying "Yes." No. Focusing is about saying "No." And when you say "No," you piss off people."</p>
            <p style={{ fontStyle: "italic" }} >Steve Jobs</p>
          </div>


          <ul class="profile-social-links">

            <li>
              <a href="https://github.com/Mule-Wit/" target="_blank" rel="noopener noreferrer">
                <img alt="github" src="https://simpleicons.org/icons/github.svg" />
              </a>
            </li>


            <li>
              <a href="https://www.facebook.com/profile.php?id=100015146529072" target="_blank" rel="noopener noreferrer">
                <img alt="facebook" src="https://simpleicons.org/icons/facebook.svg" />
              </a>
            </li>


            <li>
              <a href="https://t.me/Yamnoh" target="_blank" rel="noopener noreferrer">
                <img alt="telegram" src="https://simpleicons.org/icons/telegram.svg" />
              </a>
            </li>



          </ul>

        </div>

        <MDBFooter color="near-moon-gradient" className="font-small pt-5 mt-5">
          <MDBContainer fluid className="text-center text-md-left">
            <MDBRow>
              <MDBCol md="6">
                <h5 className="title">Dev's</h5>
                <ul>
                  <li className="list-unstyled mb-2">

                    <a href="http://wit-blog.herokuapp.com/">Wit-blog</a>
                  </li>

                  <li className="list-unstyled mb-2">

                    <a href="https://acitaphotography.netlify.app/">Acita - Photography</a>
                  </li>
                  <li className="list-unstyled mb-2">

                    <a href="https://acita.netlify.app/">Portfolio</a>
                  </li>
                </ul>
              </MDBCol>
              <MDBCol md="6" >
                <h5 className="title">Contact US</h5>
                <ul>
                  <li className="list-unstyled mb-2">
                  <MDBIcon
                      fab
                      icon="google-plus"
                      className="mr-2"
                      size="2x"
                    />
                    <a href="https://mail.google.com/">Myoni7634@gmail.com</a>
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
