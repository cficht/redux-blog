import { getComments } from './commentSelectors';

describe('commentSelectors testing', () => {

  it('gets comments by a post index', () => {
    const state = [
      {
        1: ['Pretty cool blog', 'Great blog, dude.']
      },
      {
        2: ['Allright blog']
      }
    ];
    const comments = getComments(state, 1);
    expect(comments).toEqual(
      {
        1: ['Pretty cool blog', 'Great blog, dude.']
      });
  });
  
});
