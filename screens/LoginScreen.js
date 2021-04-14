import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView
} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

class LoginScreen extends React.Component {
render(){
   return (
    <ScrollView  contentContainerStyle={styles.container}>
    <Image
      source={require('../assets/Logo.png')}
      style={styles.logo}
    />
    <View style={styles.form}></View>
    <FormInput
      placeholderText="Email"
      iconType="user"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
    />

    <FormInput
      placeholderText="Password"
      iconType="lock"
      secureTextEntry={true}
    />

    <FormButton
      buttonTitle="Sign In"
      onPress={() => this.props.navigation.navigate("Signup")}
    />

    <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
      <Text style={styles.navButtonText}>Forgot Password?</Text>
    </TouchableOpacity>
    </ScrollView>)
}
}
 
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 20,
  },
  form: {
    marginTop: 90,
  },
  logo: {
    height: 170,
    width: 300,
    resizeMode: 'cover',
  },
  text: {
    fontFamily: 'Kufam-SemiBoldItalic',
    fontSize: 28,
    marginBottom: 10,
    color: '#051d5f',
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
});
export default LoginScreen
