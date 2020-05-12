const ProductsController = require('../../../src/controllers/products');
const sinon = require('sinon');

describe('Controllers: Products', () => {
    const defaultProduct = [{
        name: 'Default product',
        description: 'product description',
        price: 100
    }];

    describe('get() products', () => {
        it('should return a list of products', () => {
            // fake request object
            const request = {}
            // fake response object
            const response = {
                send: sinon.spy()
            };
    
            const productsController = new ProductsController();
            productsController.get(request, response);

            expect(response.send.called).to.be.true;
            expect(response.send.calledWith(defaultProduct)).to.be.true;
        });
    });
});