import {View, Text, TouchableOpacity, Platform, StyleSheet, NativeEventEmitter} from 'react-native';
//import Calendar from './roomSchedule/CalendarScreen'
import COLORS from "../constants/Theme"
import AsyncStorage from '@react-native-community/async-storage';

import React, { Component } from 'react';
import Dashboard from 'react-native-dashboard';
import { FontAwesome } from 'react-native-vector-icons';
const Icon = ({ icon, item, background }) => (
  <FontAwesome
      name={icon}
      size={40}
      color={
          item.iconColor || (!item.background || !background ? '#3498db' : '#fff')
      }
      style={item.styleIcon}
  />
);

const data = [
  {
    name: 'My Profile',
    icon: (item, background) => Icon({ icon: 'user', item, background }),
    styleName: { color: COLORS.COLORS.GRADIENT_START, fontWeight: 'bold' },
    iconColor: COLORS.COLORS.GRADIENT_START,
    // rippleColor: '#000',
},

  {
    name: 'My Planning',
    icon: (item, background) => Icon({ icon: 'calendar', item, background }),
    styleName: { color: COLORS.COLORS.GRADIENT_START, fontWeight: 'bold' },
    iconColor: COLORS.COLORS.GRADIENT_START,
},

  {
    name: 'Branches',
    icon: (item, background) => Icon({ icon: 'book', item, background }),
    styleName: { color: COLORS.COLORS.GRADIENT_END, fontWeight: 'bold' },
    iconColor: COLORS.COLORS.GRADIENT_END,
},
  {
      name: 'Rooms',
      icon: (item, background) => Icon({ icon: 'home', item, background }),
      styleName: { color: COLORS.COLORS.GRADIENT_END, fontWeight: 'bold' },
      iconColor: COLORS.COLORS.GRADIENT_END,
  },

{
  name: 'Absent Students',
  icon: (item, background) => Icon({ icon: 'user-times', item, background }),
  styleName: { color: COLORS.COLORS.PRIMARY, fontWeight: 'bold' },
  iconColor: COLORS.COLORS.PRIMARY,
},
{
    name: 'Log Out',
    icon: (item, background) => Icon({ icon: 'close', item, background }),
    styleName: { color: COLORS.COLORS.MUTED, fontWeight: 'bold' },
    iconColor: COLORS.COLORS.MUTED,
},
];

const HomeScreen = ({navigation}) => {
  const card = async ({ name }) => {
    // if (name == 'My Profile') {
    //   navigation.navigate("My Profile");
    // }
    switch (name) {
      case 'My Profile':
       navigation.navigate("My Profile");break;
      case 'My Planning':
        navigation.navigate("My Planning");break;
      case 'Rooms':
        navigation.navigate("Rooms Schedule");break;
      case 'Absent Students':
        navigation.navigate("Students Absences Table");break;
        case 'Branches':
        navigation.navigate("Students Absences Table");break;
      case 'Log Out':
        await AsyncStorage.removeItem('userToken', (err) => console.log(err))
        await AsyncStorage.removeItem('firstLoginDone', (err) => console.log(err))
            navigation.navigate("Login");
            break;
      default:
        break;
  };
}
  return (
  //  <Calendar/>
  <View style={styles.container}>
    <Dashboard
        data={data}
        background={'#fff'}
        card={card}
        column={2}
        rippleColor={'#fff'}
    />
  </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 90,
    color: '#051d5f',
  },
});
