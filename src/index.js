import React, {Component} from 'react';
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
const YOUTUBE_API_KEY = 'AIzaSyBi-tUrrZWDY9Q7rMgbC-IuvJXrX-kbwL4'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      currentVideo: null
    }

    YTSearch({key: YOUTUBE_API_KEY, term: 'Breaking Bad'}, videos => {
    this.setState({ 
      videos: videos, 
      currentVideo: videos[0] 
    })

    })
  }

  onListClick = (e) => {

  }

  render() {
    console.log(this.state.videos)
  return (
    <div>
      <SearchBar />
      <VideoDetail video={this.state.currentVideo} />
      <VideoList 
      onVideoSelect={currentVideo => this.setState({currentVideo})}
      videos={this.state.videos}/>
    </div>
    )

  }
}



ReactDOM.render(<App />, document.getElementById('root'))
