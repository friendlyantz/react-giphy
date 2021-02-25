import React, { Component } from 'react'
export default class Gif extends Component {
  render() {

    const src = `https://media0.giphy.com/media/${this.props.id}/200.gif`
    // const src = 'https://media0.giphy.com/media/6mkIIJIQvfgzny5USS/200w.gif' //SOUTH PARK TEMPLATE GIF
    return (
      <img src={src} alt="" className="gif" />
    )
  }
}
