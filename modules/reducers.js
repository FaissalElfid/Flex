import { combineReducers } from "redux";
import auth from "./auth/reducer";
import rooms from "./rooms/reducer";

export default combineReducers({
  auth, rooms
});