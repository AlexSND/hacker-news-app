import {
  getTopStories,
  getNewStories,
  getBestStories,
  getStory,
} from './hackerNewsAPI';

describe('Hacker News Api Tests', () => {
  it('Get top stories data', () => {
    getTopStories().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });

  it('Get new stories data', () => {
    getNewStories().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });

  it('Get best stories data', () => {
    getBestStories().then((data) => {
      expect(Array.isArray(data)).toBe(true);
    });
  });

  it('Get story json', () => {
    getStory('21138841').then((data) => {
      expect(typeof data).toBe('object');
    });
  });
});
