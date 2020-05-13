const ProductsController = require('../../../src/controllers/products');
const sinon = require('sinon');
const Product = require('../../../src/models/products');

describe('Controllers: Products', () => {
    const defaultProduct = [{
        name: 'Default product',
        description: 'product description',
        price: 100
    }];

    describe('get() products', () => {
        // Isso deve chamar a função send com uma lista de produtos
        it('should return a list of products', async() => {
            // fake request object
            const request = {}
            // fake response object
            const response = {
                send: sinon.spy()
            };
            
            Product.find = sinon.stub();
            // const productsController = new ProductsController();
            // productsController.get(request, response);
            Product.find.withArgs({}).resolves(defaultProduct);

            // expect(response.send.called).to.be.true;
            // expect(response.send.calledWith(defaultProduct)).to.be.true;
            const productsController = new ProductsController(Product);

            await productsController.get(request, response);

            sinon.assert.calledWith(response.send, defaultProduct)
        });

        it('should return 400 when an error occurs', async () => {
            const request = {};
            const response = {
                send: sinon.spy(),
                status: sinon.stub()
            };

            response.status.withArgs(400).returns(response);
            Product.find = sinon.stub();
            Product.find.withArgs({}).rejects({ message: 'Error' });

            const productsController = new ProductsController(Product);

            await productsController.get(request, response);

            sinon.assert.calledWith(response.send, 'Error');
        });
    });
});