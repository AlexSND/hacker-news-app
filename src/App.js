import React from 'react';
import styled from 'styled-components';
import TopStoriesContainer from './containers/TopStoriesContainer';

const PageWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const App = () => (
  <PageWrapper>
    <TopStoriesContainer />
  </PageWrapper>
);

export default App;
