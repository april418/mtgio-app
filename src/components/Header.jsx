import React, { Component } from 'react'
import { AppBar } from 'material-ui'

export default class Header extends Component {
  render() {
    return <AppBar title={this.props.title} onLeftIconButtonClick={this.props.onClick} />
  }
}

