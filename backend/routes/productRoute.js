import express from 'express';
import formidable from 'express-formidable';

import { createProductController, deleteProductController, filterProductController, getProductController, getSingleProductController, productCategoryController, productPhotoController, searchProductController, similarProductController, updateProductController } from '../controller/productController.js';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';


const router = express.Router();

//create product
router.post('/create-product', requireSignIn, isAdmin, formidable(),createProductController)

//update product
router.put('/update-product/:id', requireSignIn, isAdmin, formidable(),updateProductController)

//get products
router.get('/get-products', getProductController)

//single product
router.get('/get-product/:slug', getSingleProductController)

//get photo
router.get('/product-photo/:id', productPhotoController)

//delete product
router.delete('/delete-product/:id', requireSignIn, isAdmin, deleteProductController)

//filter products
router.post('/filter-product', filterProductController)

//search product
router.get('/search/:keyword', searchProductController)

//similar product
router.get('/similar-product/:pid/:cid', similarProductController)

//category wise product
router.get('/product-category/:slug', productCategoryController)

export default router