import { createComment, CREATE_COMMENT, deleteComment, DELETE_COMMENT } from './commentActions';

describe('commentAction tests', () => {

  it('CREATE_COMMENT action', () => {
    const action = createComment(1, 'This is a great post.');
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postIndex: 1,
        comment: 'This is a great post.'
      }
    });
  });

  it('DELETE_COMMENT action', () => {
    const action = deleteComment(2, 5);
    expect(action).toEqual({
      type: DELETE_COMMENT,
      payload: {
        postIndex: 2, 
        commentIndex: 5
      }
    });
  });

});
