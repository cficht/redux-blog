import { createBlog, deleteBlog } from '../actions/postActions';
import reducer from './postReducer';

describe('postReducer tests', () => {

  it('handles the CREATE_BLOG action', () => {
    const state = [];
    const action = createBlog({
      title: 'My Cool Blog Post',
      body: 'Here is where I write some cool words.'
    });
    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        title: 'My Cool Blog Post',
        body: 'Here is where I write some cool words.'
      }
    ]);
  });

  it('handles the DELETE_BLOG action', () => {
    const state = [
      {
        title: 'My Cool Blog Post',
        body: 'Here is where I write some cool words.'
      },
      {
        title: 'Another Blog Post',
        body: 'Some more cool stuff.'
      },
    ];
    const action = deleteBlog(1);
    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        title: 'My Cool Blog Post',
        body: 'Here is where I write some cool words.'
      }
    ]);
  });
  
});
