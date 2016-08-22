import { EventEmitter } from 'events'
import AppDispatcher from '../appDispatcher'
import uuid from 'uuid';

let _stocks = [
  {
    _id: 1,
    task: 'GE',
    createdAt: Date.now(),
    isComplete: false
  },
  {
    _id: 2,
    task: 'APLE',
    createdAt: 'Apple Hospitality REIT Inc',
    isComplete: 'BATS Trading Inc'
  },
  {
    _id: 3,
    task: 'do other more stuff',
    createdAt: Date.now(),
    isComplete: false
  },
];

class StockStore extends EventEmitter {
  constructor() {
    super();

    AppDispatcher.register(action => {
      switch(action.type) {
        case 'RECEIVE_STOCKS':
          _stocks = action.stocks;
          this.emit('CHANGE');
          break;
        case 'CREATE_STOCK':
          let { stock } = action;

          stock._id = uuid();
          stock.createdAt = Date.now();
          stock.isComplete = false;

          _stocks.push(stock);
          this.emit('CHANGE');
          break;
      }
    });
}

startListening(cb) {
  this.on('CHANGE', cb);
}

stopListening(cb) {
  this.removeListener('CHANGE', cb);
}

  getAll() {
    return _stocks;
  }
}

export default new StockStore();
