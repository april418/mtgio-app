import React, { Component } from 'react'
import { GridList, GridTile } from 'material-ui'

import { Cards } from '../logics/mtgio.js'

export default class CardList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cards: [],
      page: 1,
      pageSize: 25,
      totalCount: 0
    }
  }

  get query() {
    return {
      cards: this.state.cards,
      page: this.state.page,
      pageSize: this.state.pageSize,
      totalCount: this.state.totalCount
    }
  }

  async componentWillMount() {
    const response = await Cards.where(this.query).findAll()
    console.log(response)
    this.setState({ cards: response.cards, totalCount: response.totalCount })
  }

  render() {
    return (
      <div>
        <GridList>
          {
            this.state.cards.map(card => (
              <GridTile key={card.id} title={card.name} subtitle={card.text}>
                <img src={card.imageUrl} />
              </GridTile>
            ))
          }
        </GridList>
      </div>
    )
  }
}

