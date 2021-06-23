import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
//import Calendar from './roomSchedule/CalendarScreen'
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
      styleName: { color: '#0d47a1', fontWeight: 'bold' },
      // iconColor: '#0d47a1',
      // rippleColor: '#000',
  },
  {
      name: 'My Planning',
      icon: (item, background) => Icon({ icon: 'calendar', item, background }),
      styleName: { color: '#0d47a1', fontWeight: 'bold' },
  },
  {
      name: 'Rooms',
      icon: (item, background) => Icon({ icon: 'home', item, background }),
      styleName: { color: '#0d47a1', fontWeight: 'bold' },
  },
  {
    name: 'Branches',
    icon: (item, background) => Icon({ icon: 'book', item, background }),
    styleName: { color: '#0d47a1', fontWeight: 'bold' },
},
{
  name: 'Absent Students',
  icon: (item, background) => Icon({ icon: 'user-times', item, background }),
  styleName: { color: '#0d47a1', fontWeight: 'bold' },
},
{
    name: 'Log Out',
    icon: (item, background) => Icon({ icon: 'close', item, background }),
    styleName: { color: '#0d47a1', fontWeight: 'bold' },
},
];

const HomeScreen = ({navigation}) => {
  const card = ({ name }) => console.log('Card: ' + name);
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
