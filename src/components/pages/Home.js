import React, { Component } from "react";
import axios from "axios";
import "./Home.css";
import {  MDBContainer, MDBEdgeHeader, MDBBtn } from "mdbreact";
import Display from "./Display";
import SectionContainer from "../sectionContainer";
class Home extends Component {
  state = {
    searchText: "",
    amount: 100,
    jsonImages: [],
    images: [],
    bottom: false
  };

  filter() {
    let start = this.state.images.length + 1;
    let array = this.state.images;
    this.state.jsonImages.map(item => {
      if (item.id >= start && item.id < start + 6) {
        array = [...array, item];
      }
      return true;
    });
    this.setState({ images: array });
  }
  request(sug) {
    this.setState({ jsonImages: [] });
    this.setState({ images: [] });

    axios
      .get(
        `https://pixabay.com/api/?key=13454819-267d0c115bc258e18466e28a6&q=${
          this.state.searchText === "" ? sug : this.state.searchText
        }&per_page=${this.state.amount}&safesearch=true`
      )
      .then(res => {
        let array = [];
        res.data.hits.map((item, key) => {
          array.push({
            id: key + 1,
            by: item.user,
            tumb: item.previewURL,
            main: item.largeImageURL,
            web:item.webformatURL
          });
          return true;
        });
        this.setState({ jsonImages: array });
        this.filter();
      })
      .catch(err => console.log(err));
  }
  submit(e) {
    if (e.keyCode === 13) {
      this.request();
    }
  }
  onTextChange = e => {
    const val = e.target.value;
    this.setState({ [e.target.name]: val });
  };
  fectNewPosts(per) {
    if (per > 95) {
      if (!this.state.bottom) {
        this.filter();
        console.log("fetching");
      }
      this.setState({ bottom: true });
    } else {
      this.setState({ bottom: false });
    }
  }
  componentDidMount() {
    window.addEventListener("scroll", e => {
      const fixed = e.target.scrollingElement.scrollHeight;
      const scroll = e.target.scrollingElement.scrollTop;
      let val = (scroll * 100) / (fixed - 643);
      this.fectNewPosts(val);
    });
  }

  render() {
    return (
      <div>
        <MDBEdgeHeader className="main">
          <MDBContainer>
            <h1>Search For Awosem Pictures ! </h1>

            <div className="search-form">
              <input
                type="text"
                aria-label="Search"
                onKeyUp={e => this.submit(e)}
                onChange={e => this.onTextChange(e)}
                name="searchText"
                placeholder="Search for free photos..."
              />
              <button
                onClick={() => this.request()}
                style={{ fontSize: "1.2+rem" }}
              >
                <i className=" ion-search"></i>
              </button>
            </div>
          </MDBContainer>
        </MDBEdgeHeader>

        <div>
          <MDBContainer>
            <SectionContainer
              header={
                <>
                  <code>Suggestions</code>
                </>
              }
            >
              <div className="mt-5 mr-5 mb-5 suggestions  ">
                <MDBBtn
                  outline
                  color="info"
                  onClick={() => this.request("Nature")}
                >
                  {" "}
                  Nature
                </MDBBtn>

                <MDBBtn
                  outline
                  color="info"
                  onClick={() => this.request("People")}
                >
                  {" "}
                  People
                </MDBBtn>
                <MDBBtn
                  outline
                  color="info"
                  onClick={() => this.request("Animals")}
                >
                  {" "}
                  Animals
                </MDBBtn>
                <MDBBtn
                  outline
                  color="info"
                  onClick={() => this.request("  painting")}
                >
                  {" "}
                  painting
                </MDBBtn>
                <MDBBtn
                  outline
                  color="info"
                  onClick={() => this.request("Abstract")}
                >
                  {" "}
                  Abstract
                </MDBBtn>
                <MDBBtn
                  outline
                  color="info"
                  onClick={() => this.request(" Mountains")}
                >
                  {" "}
                  Mountains
                </MDBBtn>
                <MDBBtn
                  outline
                  color="info"
                  onClick={() => this.request("Technology")}
                >
                  Technology
                </MDBBtn>
              </div>
            </SectionContainer>
            <Display images={this.state.images} />
          </MDBContainer>
        </div>
     
      </div>
    );
  }
}
export default Home;
