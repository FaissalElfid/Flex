import axios from "axios";
import authHeader from "../auth-header";
import AsyncStorage from '@react-native-community/async-storage';
import _API_URL from "../../constants/api";
// const API_URL = "http://192.168.43.24:3000/";

class RoomService {
  async getPublicContent() {
    console.log(await authHeader())
    return axios.get(API_URL+"salles/", { headers: await authHeader() })
      .then(async (response) => {
        try{
        await AsyncStorage.setItem("rooms", JSON.stringify(response.data));
        console.log(response.data)
        } catch(err){
          console.log(err)
        }
        return response.data;
      });;
  }
}

export default new RoomService();