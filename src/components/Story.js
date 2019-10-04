import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { getStory } from '../services/hackerNewsAPI';


const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
  }, []);

  return (
    <div>
      <p>
        <strong>{story.title}</strong>
      </p>
      <p>{story.by}</p>
      <a href={story.url}>{story.url}</a>
      <p>{JSON.stringify(story)}</p>
    </div>
  );
};

Story.propTypes = {
  storyId: propTypes.number.isRequired,
};

export default Story;
