import React, { useEffect, useState } from 'react';
import { getBestStories } from '../services/hackerNewsAPI';
import Story from '../components/Story';

const BestStoriesContainer = () => {
  const [bestStories, setBestStories] = useState([]);

  useEffect(() => {
    getBestStories().then((data) => {
      setBestStories(data);
    });
  });

  const storyList = (bestStories && bestStories.length > 0)
    && bestStories.map((storyId) => <Story key={storyId} storyId={storyId} />);

  return (
    <>
      <h1>Best Stories</h1>
      <div>{storyList}</div>
    </>
  );
};

export default BestStoriesContainer;
