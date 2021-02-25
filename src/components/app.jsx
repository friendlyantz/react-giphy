import React, { Component } from 'react'
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      gifs: [],
      selectedGifID: "6mkIIJIQvfgzny5USS"
    }
  }

  render() {
    // const gifs = [
    //   { id: "29I5gneghwWbCczhbb" },
    //   { id: "yfhp7az2ZBH0I" }
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifID} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
