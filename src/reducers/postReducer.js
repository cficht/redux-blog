import { CREATE_BLOG, DELETE_BLOG, UPDATE_BLOG } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_BLOG:
      return [...state, action.payload];
    case DELETE_BLOG:
      return state.filter((_, i) => i !== action.payload);
    case UPDATE_BLOG:
      return state.map((post, i) => {
        if(i === action.payload.index) { 
          return {
            title: post.title,
            body: action.payload.body
          };
        }
        return post;
      });
    default:
      return state;
  }
}
