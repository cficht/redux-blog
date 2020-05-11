import { CREATE_BLOG } from '../actions/postActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_BLOG:
      return [...state, action.payload];
    default:
      return state;
  }
}
