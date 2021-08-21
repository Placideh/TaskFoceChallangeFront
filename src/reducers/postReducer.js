import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState={
  //this represents post that is coming from our action which is where we put the fetch request
  items:[],
  //this represent the single post request that we add . when we get the response back it will be
  // saved there
  item:{}
}
//this evaluate what type that we are dealing with
export default function (state=initialState,action){
  switch(action.type){
        case FETCH_POSTS:
          //from here we return the current state
          return {
              ...state,
              items:action.payload
          }
        case NEW_POST:
          return {
            ...state,
            item:action.payload
          }
        default:
        return state;

  }
}
