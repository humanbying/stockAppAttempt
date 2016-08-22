import React, { Component } from 'react';
import moment from 'moment'

export default class ListItem extends Component {
  constructor() {
    super();
  }

  render(){
    let { _id, quote, createdAt, isComplete } = this.props;

    return (
      <tr>
        {/* <td>{ quote }</td> */}
        <td></td>
        <td></td>
        <td></td>
      </tr>
    )
  }
}
