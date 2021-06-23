
  import {
    GET_ROOMS_FAIL,
    GET_ROOMS_SUCCESS
  } from "./constants";
  
  import RoomService from "./room.service";
  
  
  export const getRooms = () => (dispatch) => {
    return RoomService.getPublicContent().then(
      (data) => {
        dispatch({
          type: GET_ROOMS_SUCCESS,
          payload: { rooms: data },
        });
  
        return Promise.resolve();
      },
      (error) => {
        console.log(error)
        dispatch({
          type: GET_ROOMS_FAIL,
        });
  
        return Promise.reject();
      }
    );
  };
