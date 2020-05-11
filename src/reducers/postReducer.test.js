import { createBlog } from '../actions/postActions';
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
});
