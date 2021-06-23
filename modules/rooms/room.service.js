import axios from "axios";
import authHeader from "../auth-header";
import AsyncStorage from '@react-native-community/async-storage';

const API_URL = "http://192.168.11.103:3000/salles/";

class RoomService {
  async getPublicContent() {
    return axios.get(API_URL, { headers: await authHeader() })
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