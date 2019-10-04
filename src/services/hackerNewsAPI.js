import axios from 'axios';
import selectFields from '../utils/selectFields';

const baseURL = 'https://hacker-news.firebaseio.com/v0';
const topStories = `${baseURL}/topstories.json`;
const newStories = `${baseURL}/newstories.json`;
const bestStories = `${baseURL}/beststories.json`;
const story = `${baseURL}/item`;

const getStories = async (url) => {
  const result = await axios
    .get(url)
    .then(({ data }) => data);
  return result;
};

const getStory = async (storyId) => {
  const result = await axios
    .get(`${story}/${storyId}.json`)
    .then(({ data }) => selectFields(data));
  return result;
};

const getTopStories = () => getStories(topStories);
const getNewStories = () => getStories(newStories);
const getBestStories = () => getStories(bestStories);

export {
  getTopStories,
  getNewStories,
  getBestStories,
  getStory,
};
