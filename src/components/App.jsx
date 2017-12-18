import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import { MuiThemeProvider } from 'material-ui'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
import routes from '../config/routes.js'
import constants from '../config/constants.js'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      opened: false
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    this.setState({opened: !this.state.opened})
  }

  render() {
    return (
      <MuiThemeProvider>
        <HashRouter>
          <div>
            <Header title={constants.title} onClick={this.handleClick} />
            <Menu items={routes} opened={this.state.opened} />
            {
              routes.map(
                (route, index) => <Route key={index} exact={route.exact} path={route.path} component={route.component} />
              )
            }
          </div>
        </HashRouter>
      </MuiThemeProvider>
    )
  }
}

