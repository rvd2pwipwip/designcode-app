import React, { Component } from "react";
import styled from "styled-components";
import { Icon } from "expo";
import { TouchableOpacity, StatusBar } from "react-native";
// import { Button } from "react-native";

class SectionScreen extends Component {
  state = {};
  static navigationOptions = {
    // title: "Section"
    header: null
  };

  componentDidMount() {
    StatusBar.setBarStyle("light-content", true);
  }

  componentWillUnmount() {
    StatusBar.setBarStyle("dark-content", true);
  }
  render() {
    const { navigation } = this.props;
    const section = navigation.getParam("section");

    return (
      <Container>
        {/* <Button
          title="Close"
          onPress={() => {
            this.props.navigation.goBack();
          }}
        /> */}
        <StatusBar hidden />
        <Cover>
          <Image source={section.image} />
          <Wrapper>
            <Logo source={section.logo} />
            <Subtitle>{section.subtitle}</Subtitle>
          </Wrapper>
          <Title>{section.title}</Title>
          <Caption>{section.caption}</Caption>
        </Cover>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.goBack();
          }}
          style={{ position: "absolute", top: 20, right: 20 }}
        >
          <CloseView>
            <Icon.Ionicons
              name="ios-close"
              size={36}
              color="#4775f2"
              style={{ top: -2 }}
            />
          </CloseView>
        </TouchableOpacity>
      </Container>
    );
  }
}

export default SectionScreen;

const Container = styled.View`
  flex: 1;
`;

const Cover = styled.View`
  height: 375px;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
`;

const Wrapper = styled.View`
  flex-direction: row;
  position: absolute;
  align-items: center;
  top: 40px;
  left: 20px;
`;
const Logo = styled.Image`
  width: 24px;
  height: 24px;
`;

const Subtitle = styled.Text`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  margin-left: 5px;
  text-transform: uppercase;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: 700;
  color: white;
  width: 170px;
  position: absolute;
  top: 78px;
  left: 20px;
`;

const Caption = styled.Text`
  font-size: 18px;
  font-weight: 300;
  color: white;
  text-transform: uppercase;
  width: 300px;
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const CloseView = styled.View`
  width: 32px;
  height: 32px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
`;
