import React, { Component } from "react";
import {
  MDBCollapse,
  MDBNavLink,

  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavItem
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import { ReactComponent as Logo } from "./img/Logo.svg";

class App extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  closeCollapse = collapseID => () => {
    window.scrollTo(0, 0);
    this.state.collapseID === collapseID && this.setState({ collapseID: "" });
  };
  render() {
    return (
      <Router>
        <div className="flyout">
          <MDBNavbar
            color="aqua-gradient"
            dark
            expand="md"
            scrolling
            fixed="top"
          >
            <MDBNavbarBrand href="/" className="py-0 font-weight-bold">
              <Logo
                style={{
                  height: "2.5rem",
                  width: "2.5rem",
                  marginRight: "1rem"
                }}
              />
              <strong className="white-text align-middle  ">ArtClub</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse("navbarCollapse3")}
            />
            <MDBCollapse
              id="navbarCollapse3"
              isOpen={this.state.collapseID}
              navbar
            >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >

                    <i className="mr-1 ion-ios-home" ></i>
                    <strong>Home</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>

                <MDBNavItem>
                  <MDBNavLink
                    exact
                    to="/About"
                    onClick={this.closeCollapse("mainNavbarCollapse")}
                  >
                    <i className="mr-1 mt-5 ion-information-circled" ></i>
                    <strong>About Us</strong>
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
