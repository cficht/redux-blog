export const CREATE_BLOG = 'CREATE_BLOG';
export const createBlog = blog => ({
  type: CREATE_BLOG,
  payload: blog
});

export const DELETE_BLOG = 'DELETE_BLOG';
export const deleteBlog = index => ({
  type: DELETE_BLOG,
  payload: index
});

export const UPDATE_BLOG = 'UPDATE_BLOG';
export const updateBlog = (index, body) => ({
  type: UPDATE_BLOG,
  payload: {
    index,
    body
  }
});
