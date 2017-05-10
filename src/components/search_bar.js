import React, {Component} from 'react'


class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ""
    }
  }

  submitStuff = () => {
    console.log("hey")
  }


  render() {
    return(
        <div>
          <input 
          onSubmit={this.submitStuff}
          value={this.state.inputValue}
          onChange={event => {this.setState({inputValue: event.target.value})}}/>
          <br/>
          Value of the input: {this.state.inputValue}
        </div>
    )
  }
}

export default SearchBar