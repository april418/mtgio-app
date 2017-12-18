import React, { Component } from 'react'
import ReactDOM, { render } from 'react-dom'
import 'babel-polyfill'

import App from './components/App.jsx'
import './styles/index.sass'

render(<App />, document.getElementById('app'))

