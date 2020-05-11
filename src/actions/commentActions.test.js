import { createComment, CREATE_COMMENT } from './commentActions';

describe('commentAction tests', () => {

  it('CREATE_COMMENT', () => {
    const action = createComment(1, 'This is a great post.');
    expect(action).toEqual({
      type: CREATE_COMMENT,
      payload: {
        postIndex: 1,
        comment: 'This is a great post.'
      }
    });
  });

});
