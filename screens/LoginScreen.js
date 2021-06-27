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
import COLORS from "../constants/Theme";
import FormButton from '../components/FormButton';
import AsyncStorage from '@react-native-community/async-storage';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      errorMessageState: "",
      errorState: false
    };
  }
  onChangeUsername(text) {
      let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
      if (reg.test(text) === false) {
        this.setState({ email: text })
        this.setState({ errorState: true })
        this.setState({ errorMessageState: 'Email incorrect !' })
        return false;
      } else {
        this.setState({ email: text })
        this.setState({ errorState: false })
        console.log("Email is Correct");
      }
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
      dispatch(login(this.state.email, this.state.password))
        .then(async () => {
          console.log("Login done succefuly")
          const firstTime = await AsyncStorage.getItem("firstLoginDone")
          if(firstTime){
            this.props.navigation.navigate("App")
          }else{
            this.props.navigation.navigate("Signup")
          }
        })
        .catch(() => {
          console.log("dispatch problem")
          this.setState({ errorState: true })
          this.setState({ errorMessageState: 'Email or Password incorrect !' })
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
    {this.state.errorState && <View>
      <Text style={styles.errorMessage}>{this.state.errorMessageState}</Text>
    </View>}
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
  errorMessage: {
    color: COLORS.COLORS.ERROR,
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
