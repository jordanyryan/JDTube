import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const YOUTUBE_API_KEY = 'AIzaSyBi-tUrrZWDY9Q7rMgbC-IuvJXrX-kbwL4';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      videos: [],
      currentVideo: null
    }
    this.videoSearch('breaking bad')
    
  }

  videoSearch(input) {
    YTSearch({key: YOUTUBE_API_KEY, term: input}, videos => {
      this.setState({ 
        videos: videos, 
        currentVideo: videos[0] 
      })
    })
  }

  selectVideo(video) {
    this.setState({currentVideo: video})
  }

  render() {
    const videoSearch = _.debounce(term => {this.videoSearch(term)}, 300)
    console.log(this.state.currentVideo)
  return (
    <div>
      <SearchBar onSearch={videoSearch}/>
      <VideoDetail video={this.state.currentVideo} />
      <VideoList 
      onVideoSelect={currentVideo => {this.selectVideo(currentVideo)}}
      videos={this.state.videos}/>
    </div>
    )

  }
}



ReactDOM.render(<App />, document.getElementById('root'))
