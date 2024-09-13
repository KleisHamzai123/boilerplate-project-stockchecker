'use strict';
const StockModel = require("../models").Stock;
const fetch = require("node-fetch"); 





async function getStock(stock){
  const response = await fetch('https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/${stock}/quote');
  const { symbol, latestPrice } = await response.json();
  return { symbol, latestPrice};
}

async function saveStock(stock, like, ip){

  let saved = {};
  const foundStock = await findStock(stock);
  if (!foundStock) {
    const createsaved = await createStock(stock, like, ip);
    saved = createsaved;
    return saved;
  }else{
    if (like && foundStock.likes.indexOf(ip)=== -1){foundStock.likes.push(ip);} saved = await foundStock.save();
    return saved;
  }
  
}

module.exports = function (app) {

  app.route('/api/stock-prices')
    .get(function async (req, res){
      const { stock, like } = req.query;
      const { symbol, latestPrice } = await getStock(stock);
      if (!symbol){
        res.json ({ stockData: { likes: like ? 1: 0 }});
        return;
      }
    });
    
};

//https://stock-price-checker-proxy.freecodecamp.rocks/v1/stock/TSLA/quote