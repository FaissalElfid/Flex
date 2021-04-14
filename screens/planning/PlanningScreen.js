import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';

const PlanningScreen = ({navigation}) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Planning</Text>
    </View>
  );
};

export default PlanningScreen;

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
