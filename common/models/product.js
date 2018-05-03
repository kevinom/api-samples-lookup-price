'use strict';

module.exports = function(Product) {
  var priceService;

  Product.on('attached', function() {
    priceService = Product.app.dataSources.priceREST;
  });

  Product.lookupPrice = function() {
    priceService.price.apply(priceService, arguments);
  }

  Product.remoteMethod('lookupPrice', {
    description: 'Calculate price for specified product',
    accepts: [{ arg: 'productId', type: 'number' }],
    returns: { arg: 'price', root: true },
    http: { verb: 'get' }
  });

};
