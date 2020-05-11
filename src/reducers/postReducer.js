import { CREATE_BLOG, DELETE_BLOG } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_BLOG:
      return [...state, action.payload];
    case DELETE_BLOG:
      return state.filter((_, i) => i !== action.payload);
    default:
      return state;
  }
}
