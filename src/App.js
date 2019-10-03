import React, { useEffect, useState } from 'react';
import { getTopStories } from './services/hackerNewsAPI';

const App = () => {
  const [topStories, setTopStories] = useState([]);

  useEffect(() => {
    getTopStories().then((data) => {
      setTopStories(data);
    });
  });

  return (
    <p>{JSON.stringify(topStories)}</p>
  );
};

export default App;
