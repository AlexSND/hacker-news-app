import React, { useEffect, useState } from 'react';
import { getNewStories } from '../services/hackerNewsAPI';
import Story from '../components/Story';

const NewStoriesContainer = () => {
  const [newStories, setNewStories] = useState([]);

  useEffect(() => {
    getNewStories().then((data) => {
      setNewStories(data);
    });
  });

  const storyList = (newStories && newStories.length > 0)
    && newStories.map((storyId) => <Story key={storyId} storyId={storyId} />);

  return (
    <>
      <h1>New Stories</h1>
      <div>{storyList}</div>
    </>
  );
};

export default NewStoriesContainer;
