import AsyncStorage from '@react-native-community/async-storage';
export default function authHeader() {
    //const user = JSON.parse(AsyncStorage.getItem("user"));
    const user = AsyncStorage.getItem("user");
    if (user && user.accessToken) {
      // For Spring Boot back-end
      // return { Authorization: "Bearer " + user.accessToken };
  
      // for Node.js Express back-end
      return { "x-access-token": user.accessToken };
    } else {
      return {};
    }
  }