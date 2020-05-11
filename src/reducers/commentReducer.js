import { CREATE_COMMENT } from '../actions/commentActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type){
    case CREATE_COMMENT:
      return state.map((comments) => {
        if(action.payload.postIndex) { 
          comments[action.payload.postIndex].push(action.payload.comment);
        }
        return comments;
      });
    default:
      return state;
  }
}
