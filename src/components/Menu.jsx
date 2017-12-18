import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Drawer, MenuItem } from 'material-ui'

export default class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = { opened: props.opened || false }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleClick(event) {
    this.setState({ opened: false })
  }

  handleChange(opened) {
    this.setState({ opened })
  }

  componentWillReceiveProps(props) {
    this.setState({ opened: props.opened })
  }

  render() {
    return (
      <Drawer width={200} docked={false} open={this.state.opened} onRequestChange={this.handleChange}>
        {
          this.props.items.map(
            (item, index) => (
              <Link key={index} to={item.path} onClick={this.handleClick}>
                <MenuItem>{item.name}</MenuItem>
              </Link>
            )
          )
        }
      </Drawer>
    )
  }
}

