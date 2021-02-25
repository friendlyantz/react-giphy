import React, { Component } from 'react'

export default class Gif extends Component {
  render() {
    const src = 'https://media0.giphy.com/media/6mkIIJIQvfgzny5USS/200w.gif'
    return (
      <img src={src} alt="" className="gif" />
    )
  }
}
