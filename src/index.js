import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
const YOUTUBE_API_KEY = 'AIzaSyBi-tUrrZWDY9Q7rMgbC-IuvJXrX-kbwL4'

YTSearch({key: YOUTUBE_API_KEY, term: 'runescape'}, function(data) {
  console.log(data)
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
    }

    YTSearch({key: YOUTUBE_API_KEY, term: 'Breaking Bad'}, videos => {
    this.setState({ videos })
    })
  }

  render() {
    console.log(this.state.videos)
  return (
    <div>
      <SearchBar />
      <VideoList />
    </div>
    )

  }
}



ReactDOM.render(<App />, document.getElementById('root'))
