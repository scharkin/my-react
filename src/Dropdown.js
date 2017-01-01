import React, { Component } from 'react';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false }
  }

  toggleState() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    console.log('isOpen', this.state.isOpen);
    let dropdownText;
    if (this.state.isOpen) {
      dropdownText = <div>Here is dropdown Text</div>
    }
    return (
      <div onClick={this.toggleState.bind(this)}>
        It is a Dropdown
        {dropdownText}
      </div>
    )
  }
}

export default Dropdown;
