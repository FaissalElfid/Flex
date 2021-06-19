import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
const API_URL = "http://192.168.11.103:3000/auth/admin/";

class AuthService {
  login(emailObj, passwordObj) {
    return axios
      .post("http://192.168.11.103:3000/auth/admin/login/", { email: emailObj, password: passwordObj })
      .then((response) => {
        console.log("then"+response)
        if (response.data.accessToken) {
          AsyncStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  updatePassword(newPasswordObj, oldPasswordObj){
    // console.log(emailObj)
    // console.log(passwordObj)
    return axios
      .post("http://192.168.11.103:3000/auth/admin/update-password/", { newPassword: newPasswordObj, oldPassword: oldPasswordObj }, { headers: authHeader() } )
      .then((response) => {
        console.log("then"+response)
        if (response.data.accessToken) {
          AsyncStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }
  logout() {
    AsyncStorage.removeItem("user");
  }

}

export default new AuthService();