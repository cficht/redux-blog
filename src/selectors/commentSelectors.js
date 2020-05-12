export const getComments = (state, postIndex) => 
  state.find(postComments => postComments[postIndex]);
