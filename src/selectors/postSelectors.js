export const getBlogs = state => state;
export const getBlogByIndex = (state, index) =>
  getBlogs(state).find((_, i) => i === index);
