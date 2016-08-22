import AppDispatcher from '../AppDispatcher'

const StockActions = {
  createStock(stock) {
      AppDispatcher.dispatch({
        type: 'CREATE_STOCK',
        stock
      })
  }
}

export default StockActions
