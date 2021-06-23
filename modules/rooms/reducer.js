import {
    GET_ROOMS_FAIL,
    GET_ROOMS_SUCCESS
  } from "./constants";
  import AsyncStorage from '@react-native-community/async-storage';
  
  const rooms = AsyncStorage.getItem("rooms");
  const initialState = rooms
    ? {rooms }
    : {rooms: null };
  
  export default function (state = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      case GET_ROOMS_SUCCESS:
        return {
          ...state,
          rooms: payload.rooms,
        };
      case GET_ROOMS_FAIL:
        return {
          ...state,
          rooms: null,
        };
        
      default:
        return state;
    }
  }