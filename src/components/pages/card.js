import React, { Component } from "react";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }
  componentWillMount() {
    this.setState({ img: this.props.small });
  }
  componentDidMount() {
    this.setState({ img: this.props.large });
  }

  render(props) {
    const { user } = this.props;
    console.log(user);
    return <img src={this.state.img} alt={user} />;
  }
}

export default Card;
