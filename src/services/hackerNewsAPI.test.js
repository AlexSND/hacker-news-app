import { getTopStories, getNewStories, getBestStories } from './hackerNewsAPI';

test('Get top stories data', () => {
  getTopStories().then((data) => {
    expect(Array.isArray(data)).toBe(true);
  });
});

test('Get new stories data', () => {
  getNewStories().then((data) => {
    expect(Array.isArray(data)).toBe(true);
  });
});

test('Get best stories data', () => {
  getBestStories().then((data) => {
    expect(Array.isArray(data)).toBe(true);
  });
});
