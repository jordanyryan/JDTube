import React, {Component} from 'react'


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
  }
  onInputChange(event) {
    this.setState({
      inputValue: event
    })
    this.props.onSearch(event)
  }


  render() {
    return(
        <div className="search-bar">
          <input 
          value={this.state.inputValue}
          onChange={event => {this.onInputChange(event.target.value)}}/>
        </div>
    )
  }
}

export default SearchBar