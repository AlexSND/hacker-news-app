import React, { useEffect, useState } from 'react';
import { getTopStories } from '../services/hackerNewsAPI';
import Story from '../components/Story';

const TopStoriesContainer = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    getTopStories().then((data) => {
      setTopStories(data);
    });
  }, []);

  const storyList = (topStories && topStories.length > 0)
    && topStories.map((storyId) => <Story key={storyId} storyId={storyId} />);

  return (
    <div>{storyList}</div>
  );
};

export default TopStoriesContainer;
