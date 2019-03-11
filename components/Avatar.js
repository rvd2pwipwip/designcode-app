import React, { Component } from "react";
import styled from "styled-components";

class Avatar extends Component {
  state = {
    photo: "https://cl.ly/66a3fc9b6051/download/avatar-default.jpg"
  };

  componentDidMount() {
    fetch("https://uinames.com/api/?ext")
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          photo: response.photo
        });
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default Avatar;

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
