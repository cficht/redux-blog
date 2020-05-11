import { getBlogs } from './postSelectors';

describe('postSelectors testing', () => {
  it('gets all the blogs', () => {
    const state = [
      {
        title: 'My Cool Blog Post',
        body: 'Here is where I write some cool words.'
      }
    ];
    const blogs = getBlogs(state);
    expect(blogs).toEqual([
      {
        title: 'My Cool Blog Post',
        body: 'Here is where I write some cool words.'
      }
    ]);
  });
});
