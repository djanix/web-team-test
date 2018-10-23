import React, { Component } from 'react';
import styled from 'styled-components';
import Carousel from './components/Carousel';

class App extends Component {
  render() {
    return (
      <MainApp className="App">
        <Carousel />
      </MainApp>
    );
  }
}

const MainApp = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
`;

export default App;
