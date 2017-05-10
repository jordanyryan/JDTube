import React, {Component} from 'react'

class VideoListItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      video: {}
    }
  }

    render() {
      return(
        <li>Video</li>
      )
    }
}

export default VideoListItem