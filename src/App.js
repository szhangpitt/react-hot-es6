import React, { Component } from 'react';

import Frame from './components/ImageSlider/Frame';

export default class App extends Component {
  render() {
    return (
        <div>
          <h1>Hello, world.</h1>
          <Frame>I am inside a frame</Frame>
        </div>
    );
  }
}
