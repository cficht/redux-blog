import { getBlogs, getBlogByIndex } from './postSelectors';

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

  it('gets a blog by index', () => {
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
    const blog = getBlogByIndex(state, 1);
    expect(blog).toEqual({
      title: 'Another Blog Post',
      body: 'Some more cool stuff.'
    });
  });
  
});
