import { createBlog, CREATE_BLOG } from './postActions';

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
  
});
