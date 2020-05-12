import reducer from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';

describe('commentReducer tests', () => {

  it('handles the CREATE_COMMENT action', () => {
    const state = [
      {
        1: ['Pretty cool blog.']
      }
    ];
    const action = createComment(1, 'Great blog, dude.');
    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        1: ['Pretty cool blog.', 'Great blog, dude.']
      }
    ]);
  });

  it('handles the DELETE_COMMENT action', () => {
    const state = [
      {
        1: ['Pretty cool blog.', 'Great blog, dude.']
      }
    ];
    const action = deleteComment(1, 1);
    const newState = reducer(state, action);
    expect(newState).toEqual([
      {
        1: ['Pretty cool blog.']
      }
    ]);
  });


});
