import React, { Component } from 'react';
import ListItem from './ListItem'
import StockStore from '../stores/StockStore'
import StockAction from '../actions/StockActions'

export default class StockList extends Component {
  constructor() {
    super();

    this.state = {
      stocks : StockStore.getAll()
    }
    this._onChange = this._onChange.bind(this);
  }

  //when it mounts

  componentDidMount() {
    StockStore.startListening(this._onChange);
  }

  componentWillUnmount() {
    StockStore.stopListening(this._onChange);
  }

  _onChange() {
    this.setState({
      stocks:StockStore.getAll()
    });
  }


  render(){

    const ListItems = this.state.stocks.map(stock => {
      return (
        <ListItem key = {stock._id} {...stock}/>
      )
    })

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Name</th>
            <th>Exchange</th>
          </tr>
        </thead>
        <tbody>
          {ListItems}
        </tbody>
      </table>
    )
  }
}
