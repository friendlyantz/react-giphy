import React, { Component } from 'react'
import giphy from "giphy-api";

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

    this.search("lala");
  }

  search = (query) => {
    // apicall
    const api_key = "nbZ987awZlAD6T6AMZAi1cohEZ32R17e"
    // giphy('nbZ987awZlAD6T6AMZAi1cohEZ32R17e').
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=2&q=${query}`
    console.log(url)
    fetch(url)
      .then(response => response.json())
      .then(content => {
        console.log(content.data)
        this.setState({
          gifs: content.data
        })
      });

    // ==============OLD API METHOD VIA HTTP _ DO NO USE!===========
    // giphy('nbZ987awZlAD6T6AMZAi1cohEZ32R17e').search({
    //   q: query,
    //   rating: 'g',
    //   limit: 5
    // }, (error, res) => { // removed function in liue to arrow function!!!!! in order it to keep in callback
    //   // console.log(error)
    //   console.log(res.data)
    //   this.setState({
    //     gifs: res.data
    //   });
    // });
    // ==================

  }

  render() {
    // const gifs = [
    //   { id: "29I5gneghwWbCczhbb" },
    //   { id: "yfhp7az2ZBH0I" }
    // ];

    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
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
