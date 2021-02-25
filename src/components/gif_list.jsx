import React, { Component } from 'react';
import Gif from './gif.jsx';

export default class GifList extends Component {
  renderList = () => {
    return this.props.gifs.map(gif => {
      return <Gif id={gif.id} key={gif.id} />
    })
  }

  render() {
    return (
      <div className="gif-list">
        {this.renderList()}
      </div>
    )
  }
}
