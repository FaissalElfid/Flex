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
import { connect } from "react-redux";
import { login } from "../modules/auth/actions";
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
    };
  }
  onChangeUsername(text) {
    console.log(this.state.username)
    this.setState({
      username: text,
    });
  }
  onChangePassword(e) {
    this.setState({
      password: e,
    });
  }
  handleLogin() {
    this.setState({
      loading: true,
    });
    const { dispatch } = this.props;
    console.log("email :" +this.state.username+ " password : "+this.state.password)
      dispatch(login(this.state.username, this.state.password))
        .then(() => {
          console.log("Login done succefuly")
          this.props.navigation.navigate("Signup")
        })
        .catch(() => {
          console.log("A problem with the dispatch")
          this.setState({
            loading: false
          });
        });
    }
  
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
      value={this.state.username}
      onChangeText={(text) => this.onChangeUsername(text)}
      iconType="user"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
    />

    <FormInput
      placeholderText="Password"
      onChangeText={(text) => this.onChangePassword(text)}
      value={this.state.password}
      iconType="lock"
      secureTextEntry={true}
    />

    <FormButton
      buttonTitle="Sign In"
      //onPress={() => this.props.navigation.navigate("Signup")}
      onPress={this.handleLogin}
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
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn
  };
}
export default connect(mapStateToProps)(LoginScreen);
// export default LoginScreen
