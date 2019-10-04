/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { getStory } from '../services/hackerNewsAPI';

const StoryWrapper = styled.article`
  border-bottom: 1px solid gray;
  padding-bottom: 10px;

  &:last-of-type {
    border-bottom: none;
  }
`;

const Story = ({ storyId }) => {
  const [story, setStory] = useState([]);

  useEffect(() => {
    getStory(storyId).then((data) => data && setStory(data));
  }, []);

  return (
    <StoryWrapper>
      <p>
        <strong>{story.title}</strong>
      </p>
      <p>{story.by}</p>
      <p>{story.time}</p>
      <a href={story.url}>{story.url}</a>
    </StoryWrapper>
  );
};

Story.propTypes = {
  storyId: propTypes.number.isRequired,
};

export default Story;
