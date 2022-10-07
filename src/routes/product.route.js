import express from 'express';
import productClass from '../controllers/product.controller.js';
import { validate } from '../middlewares/auth.middleware.js'

const productRoute = express.Router();
const product = new productClass();

productRoute.post('/', validate, product.add);
productRoute.get('/', validate, product.findAll);
productRoute.get('/:id', validate, product.findByID);
productRoute.delete('/:id', validate, product.deleteProd);
productRoute.put('/:id', validate, product.update);

export default productRoute;