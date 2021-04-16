import React from "react";
import { StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Block, Text, theme } from "galio-framework";

import Icon from "./Icon";
import argonTheme from "../constants/Theme";

class DrawerItem extends React.Component {
  renderIcon = () => {
    const { title, focused } = this.props;

    switch (title) {
      case "Home":
        return (
          <Icon
            name="shop"
            family="ArgonExtra"
            size={14}
            color={focused ? "white" : argonTheme.COLORS.PRIMARY}
          />
        );
      case "My Planning":
        return (
          <Icon
            name="calendar-date"
            family="ArgonExtra"
            size={18}
            color={focused ? "white" : argonTheme.COLORS.INFO}
          />
        );
        case "Students Absences Table":
        return (
          <Icon
            name="deleteusergroup"
            family="AntDesign"
            size={22}
            color={focused ? "white" : argonTheme.COLORS.WARNING}
          />
        );
        case "Profile":
        return (
          <Icon
            name="user"
            family="EvilIcons"
            size={20}
            color={focused ? "white" : argonTheme.COLORS.BLACK}
          />
        );
        case "Rooms Schedule":
        return (
          <Icon
            name="meeting-room"
            family="MaterialIcons"
            size={22}
            color={focused ? "white" : argonTheme.COLORS.BUTTON_COLOR}
          />
        );
        case "My Profile":
        return (<Icon
          name="user"
          family="EvilIcons"
          size={25}
          color={focused ? "white" : "rgba(0,0,0,0.5)"}
        />);
      case "Getting Started":
        return (<Icon
          name="spaceship"
          family="ArgonExtra"
          size={14}
          color={focused ? "white" : "rgba(0,0,0,0.5)"}
        />);
      case "Log out":
        return <Icon />;
      default:
        return null;
    }
  };

  render() {
    const { focused, title, navigation } = this.props;

    const containerStyles = [
      styles.defaultStyle,
      focused ? [styles.activeStyle, styles.shadow] : null
    ];

    return (
      <TouchableOpacity
        style={{ height: 60 }}
        onPress={() =>
          title == "Getting Started"
            ? navigation.navigate("Onboarding")
            : navigation.navigate(title)
        }
      >
        <Block flex row style={containerStyles}>
          <Block middle flex={0.1} style={{ marginRight: 5 }}>
            {this.renderIcon()}
          </Block>
          <Block row center flex={0.9}>
            <Text
              size={15}
              bold={focused ? true : false}
              color={focused ? "white" : "rgba(0,0,0,0.5)"}
            >
              {title}
            </Text>
          </Block>
        </Block>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  defaultStyle: {
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  activeStyle: {
    backgroundColor: argonTheme.COLORS.ACTIVE,
    borderRadius: 4
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.1
  }
});

export default DrawerItem;
