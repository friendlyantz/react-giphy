import React, { Component } from 'react'
import SearchBar from './search_bar.jsx'
import Gif from './gif.jsx'
import GifList from './gif_list.jsx'
class App extends Component {
  render() {
    const gifs = [
      { id: "29I5gneghwWbCczhbb" },
      { id: "yfhp7az2ZBH0I" }
    ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="6mkIIJIQvfgzny5USS" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
