import { CREATE_COMMENT, DELETE_COMMENT } from '../actions/commentActions';

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
    case DELETE_COMMENT:
      return state.map((comments) => {
        return { 
          [action.payload.postIndex]: comments[action.payload.postIndex].filter((_, i) => i !== action.payload.commentIndex)
        };
      });
      // return state.filter((_, i) => i !== action.payload.);
    default:
      return state;
  }
}
