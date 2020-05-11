export const CREATE_COMMENT = 'CREATE_COMMENT';
export const createComment = (postIndex, comment) => ({
  type: CREATE_COMMENT,
  payload: {
    postIndex,
    comment
  } 
});
