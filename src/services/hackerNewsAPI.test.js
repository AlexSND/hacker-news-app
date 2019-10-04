import {
  getTopStories,
  getNewStories,
  getBestStories,
  getStory,
} from './hackerNewsAPI';

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

test('Get story json', () => {
  getStory('21138841').then((data) => {
    expect(typeof data).toBe('object');
  });
});
