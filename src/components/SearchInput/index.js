import React, { Component } from 'react';

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  onChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <input
        value={this.state.text}
        onChange={this.onChange.bind(this)}
        {...this.props}
      />
    )
  }
}

export default SearchInput;
