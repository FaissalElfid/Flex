import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import AsyncStorage from '@react-native-community/async-storage';
import COLORS from "../constants/Theme"

const Dots = ({selected}) => {
  let backgroundColor;

  backgroundColor = selected ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.3)';

  return (
      <View 
          style={{
              width:6,
              height: 6,
              marginHorizontal: 3,
              backgroundColor
          }}
      />
  );
}

const Skip = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Next</Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
      style={{marginHorizontal:10}}
      {...props}
  >
      <Text style={{fontSize:16}}>Done</Text>
  </TouchableOpacity>
);


class OnboardingScreen extends React.Component {
  constructor(props){
    super(props); 
    this.redirect = this.redirect.bind(this);
  }
  async redirect() {
    const token = await AsyncStorage.getItem("userToken");
    if(token){
      this.props.navigation.navigate("App")
    }else{
      this.props.navigation.navigate("Login")
    }
  }
  render(){
    return (
      <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      DotComponent={Dots}
      onSkip={() => this.redirect()}
      onDone={() => this.redirect()}
      pages={[
        {
          backgroundColor: "#F7EFE9",
          image: <Image style={styles.image1} source={require('../assets/onboardingTest.png')} />,
          title: 'Be open to the World',
          subtitle: 'A New Way To Open your doors to The World',
        },
        {
          backgroundColor: "#E1D5C9",
          image: <Image style={styles.image3} source={require('../assets/onboarding-img3.png')} />,
          title: 'Open your doors',
          subtitle: "Waiting insistently in front of a tightly closed door is unfair to all of the open doors! Give a chance to the open doors!",
        },
        {
          backgroundColor: "#C49450",
          image: <Image style={styles.image2} source={require('../assets/onboarding-img2.png')} />,
          title: 'Don\'t loose focus',
          subtitle: 'Stay focused, go after your dreams and let your doors open themselves.',
        },
      ]}
    />
    // A classroom is like a parachute. It doesn't work if it is not open.
  );
};}
  

export default OnboardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  },
  image1:{
    width: 385,
    height: 240,
  },
  image2:{
    width: 385,
    height: 240,
  },
  image3:{
    width: 450,
    height: 290,
  },
  onboeading1:{
    height: 200,
    width: 200,
    resizeMode: 'cover',
  }
});