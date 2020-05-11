import { createBlog, CREATE_BLOG, deleteBlog, DELETE_BLOG } from './postActions';

describe('postActions testing', () => {
  it('CREATE_BLOG action', () => {
    const action = createBlog({
      title: 'My Cool Blog Post',
      body: 'Here is where I write some cool words.'
    });
    expect(action).toEqual({
      type: CREATE_BLOG,
      payload: {
        title: 'My Cool Blog Post',
        body: 'Here is where I write some cool words.'
      }
    });
  });

  it('DELETE_BLOG action', () => {
    const action = deleteBlog(30);
    expect(action).toEqual({
      type: DELETE_BLOG,
      payload: 30
    });
  });

});
