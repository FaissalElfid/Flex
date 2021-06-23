import AsyncStorage from '@react-native-community/async-storage';
export default async function authHeader() {
    //const user = JSON.parse(AsyncStorage.getItem("user"));
    const user = await AsyncStorage.getItem("userToken");
    //console.log("******auth-header******")
    //console.log(user)

    // if (user) {
      return { Authorization: "Bearer " + user };
    // } else {
    //   return {};
    // }
  }