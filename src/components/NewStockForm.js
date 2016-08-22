import React, { Component } from 'react'
import StockActions from '../actions/StockActions'
import jsonp from 'jsonp'

export default class NewStockForm extends Component {
  constructor() {
    super();

    this.state = {
      quote: ''
    }
    this.changeQuoteInput = this.changeQuoteInput.bind(this);
    this.submit = this.submit.bind(this);
  }

  changeQuoteInput(e) {
    let quote = e.target.value;
    this.setState({ quote })
  }

  submit(e) {
    e.preventDefault();
    let { quote } = this.state;

    StockActions.createStock({ quote });
    this.setState({quote: ''});
  }

  render() {
    let { quote } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <div className="form-group">
            <label>Enter New Stock:</label>
            <input type="text"
                   className="form-control"
                   placeholder="view stock quote"
                   value={quote}
                   onChange={this.changeQuoteInput}/>
          </div>
          <button type="submit" className="btn btn-default">Submit</button>
        </form>
      </div>
    )
  }
}
