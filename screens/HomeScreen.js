import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
//import Calendar from './roomSchedule/CalendarScreen'

const HomeScreen = ({navigation}) => {

  return (
  //  <Calendar/>
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9fafd',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 90,
    color: '#051d5f',
  },
});
