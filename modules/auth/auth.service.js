import axios from "axios";
import AsyncStorage from '@react-native-community/async-storage';
import authHeader from "../auth-header";

const API_URL = "http://192.168.43.24:3000/auth/admin/";
class AuthService {
  async login(emailObj, passwordObj) {
    return axios
      .post(API_URL+"login/", { email: emailObj, password: passwordObj })
      .then(async (response) => {
          try{
            await AsyncStorage.setItem("userToken", response.data.access_token);// do a multi set
            // await AsyncStorage.setItem("firstLoginDone", JSON.stringify(true));
          } catch(err){
            console.log(err)
          }
        // }

        return response.data;
      });
  }
  async updatePassword(oldPasswordObj, newPasswordObj){
    return axios
      .patch(API_URL+"update-password/", { oldPassword: oldPasswordObj, newPassword: newPasswordObj  }, { headers: await authHeader() } )
      .then(async (response) => {
        // console.log("then"+response)
        try{
        await AsyncStorage.setItem("user", JSON.stringify(response.data));
        } catch(err){
          console.log(err)
        }
        return response.data;
      });
  }
  logout() {
    AsyncStorage.removeItem("userToken");
  }

}

export default new AuthService();