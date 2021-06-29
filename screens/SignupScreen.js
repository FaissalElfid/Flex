import React from 'react';
import {View, Text, TouchableOpacity, Platform, StyleSheet} from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { updatePassword } from "../modules/auth/actions";
import { connect } from "react-redux";
import AsyncStorage from '@react-native-community/async-storage';

class SignupScreen extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.onChangeOldPassword = this.onChangeOldPassword.bind(this);
    this.onChangeNewPassword = this.onChangeNewPassword.bind(this);
    this.confirmNewPassword = this.onChangeConfirmNewPassword.bind(this);

    this.state = {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
      loading: false,
    };
  }
  onChangeOldPassword(text) {
    this.setState({
      oldPassword: text,
    });
  }
  onChangeNewPassword(text) {
    this.setState({
      newPassword: text,
    });
  }
  onChangeConfirmNewPassword(text) {
    this.setState({
      confirmNewPassword: text,
    });
  }
  handlePasswordChange() {
    this.setState({
      loading: true,
    });
    const { dispatch } = this.props;
      dispatch(updatePassword(this.state.oldPassword, this.state.newPassword))
        .then(async () => {
          console.log("changing done succefuly")
          await AsyncStorage.setItem("firstLoginDone", JSON.stringify(true))
          this.props.navigation.navigate("App")
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
    <View style={styles.container}>
      <Text style={styles.text}>Change your password</Text>

      {/* <FormInput
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      /> */}

      <FormInput
        value={this.state.oldPassword}
        onChangeText={(text) => this.onChangeOldPassword(text)}
        placeholderText="Old Password"
        iconType="user"
        secureTextEntry={true}
      />
      <FormInput
        value={this.state.newPassword}
        onChangeText={(text) => this.onChangeNewPassword(text)}
        placeholderText="New Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        value={this.state.confirmNewPassword}
        onChangeText={(text) => this.onChangeConfirmNewPassword(text)}
        placeholderText="Confirm New Password"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Sign Up"
        onPress={this.handlePasswordChange}
      />

      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our{' '}
        </Text>
        <TouchableOpacity onPress={() => alert('Terms Clicked!')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
          Privacy Policy
        </Text>
      </View>

      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>Already Changed ?</Text>
      </TouchableOpacity>
    </View>
  );
    }
};

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  return {
    isLoggedIn
  };
}
export default connect(mapStateToProps)(SignupScreen);

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
  navButton: {
    marginTop: 15,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2e64e5',
    fontFamily: 'Lato-Regular',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 35,
    justifyContent: 'center',
  },
  color_textPrivate: {
    fontSize: 13,
    fontWeight: '400',
    fontFamily: 'Lato-Regular',
    color: 'grey',
  },
});
