import React, { Component } from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import { Icon } from "expo";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";

const activeColor = "#4775f2";
const idleColor = "#b8bece";

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Section: SectionScreen,
    Courses: CoursesScreen,
    Projects: ProjectsScreen
  },
  {
    mode: "modal"
  }
);

HomeStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  const routeName = navigation.state.routes[navigation.state.index].routeName;

  routeName === "Section" ? !tabBarVisible : tabBarVisible;
  return {
    tabBarVisible,
    tabBarLabel: "Home",
    tabBarIcon: ({ focused }) => (
      <Icon.Ionicons
        name="ios-home"
        size={26}
        color={focused ? activeColor : idleColor}
      />
    )
  };
};

const CoursesStack = createStackNavigator({
  Courses: CoursesScreen
});

CoursesStack.navigationOptions = {
  tabBarLabel: "Courses",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-albums"
      size={26}
      color={focused ? activeColor : idleColor}
    />
  )
};

const ProjectsStack = createStackNavigator({
  Projects: ProjectsScreen
});

ProjectsStack.navigationOptions = {
  tabBarLabel: "Projects",
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="ios-folder"
      size={26}
      color={focused ? activeColor : idleColor}
    />
  )
};

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  CoursesStack,
  ProjectsStack
});

export default TabNavigator;
