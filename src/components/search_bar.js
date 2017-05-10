import React, {Component} from 'react'


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
  }


  render() {
    return(
        <div className="search-bar">
          <input 
          value={this.state.inputValue}
          onChange={event => {this.setState({inputValue: event.target.value})}}/>
        </div>
    )
  }
}

export default SearchBar