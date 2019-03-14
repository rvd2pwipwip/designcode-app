import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    name: state.name
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateName: name =>
      dispatch({
        type: "UPDATE_NAME",
        name: name
      })
  };
}

class Avatar extends Component {
  state = {
    photo: "https://cl.ly/66a3fc9b6051/download/avatar-default.jpg"
  };

  componentDidMount() {
    // fetch("https://uinames.com/api/?ext")
    fetch("https://uifaces.co/api?limit=1&random&gender[]=female", {
      headers: new Headers({
        "X-API-KEY": "10c17b9fe68541ac554d7f9b73feec"
      })
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          photo: response[0].photo
        });

        this.props.updateName(response[0].name);
      });
  }

  render() {
    return <Image source={{ uri: this.state.photo }} />;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Avatar);

const Image = styled.Image`
  width: 44px;
  height: 44px;
  border-radius: 22px;
`;
