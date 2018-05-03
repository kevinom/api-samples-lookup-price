#  api-samples-pricing
##  Implement APIs with the LoopBack framework
#####  3 May 2018 - warrenf

This Node.js application returns a randomly generated price for the given product identifier. Use this application to create an endpoint for the IBM API Connect gateway.

You can test a deployed copy of this API on IBM Cloud: https://pricesample.mybluemix.net/price/{id}

To build and run your own copy of the `pricing` application:

1. Run `npm install`.
2. Start the LoopBack server with `npm start`.
3. Open http://localhost:3000/api/products/lookupPrice?productId={id} to test the API operation.
