import React, { Component } from 'react';
import Gif from './gif.jsx';

export default class GifList extends Component {
  render() {

    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />
    });
  }
}
