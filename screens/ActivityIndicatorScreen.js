import React from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import AsyncStorage from '@react-native-community/async-storage';

class ActivityIndicatorScreen extends React.Component {
  async componentDidMount(){
    const token = await AsyncStorage.getItem("userToken")
    // firstLoginDone
    const firstTime = await AsyncStorage.getItem("firstLoginDone")
    if(token){
      if(firstTime){
        this.props.navigation.navigate("App")
      }else{
        this.props.navigation.navigate("Onboarding")
      }  
    }else {
      this.props.navigation.navigate("Onboarding")
    }
    console.log(token)
  }
  render(){
    return (
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#2E3366" />
        </View>
      )}
    };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});

export default ActivityIndicatorScreen;