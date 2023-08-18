import {createStore} from "redux";

const initialState = {
  num:0
}

function reducer({state =initialState, action}){
  return state
}

const store = createStore(reducer)

export default store;