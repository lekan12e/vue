import { createStore } from "redux";
import userReducer from "./reducers/reducer";

const store = createStore(userReducer)

export default store
