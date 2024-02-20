import productModel from "../models/productModel.js";
import fs from "fs"
import slugify from "slugify";

//create product
export const createProductController = async (req, res) => {
      try {
            const { name, description, price, category, quantity, shipping } = req.fields;
            const { photo } = req.files;

            //validation
            switch (true) {
                  case !name:
                        return res.status(500).send({
                              error: "Name is required",
                        })
                  case !description:
                        return res.status(500).send({
                              error: "Description is required",
                        })
                  case !price:
                        return res.status(500).send({
                              error: "Price is required",
                        })
                  case !category:
                        return res.status(500).send({
                              error: "Category is required",
                        })
                  case !quantity:
                        return res.status(500).send({
                              error: "Quantity is required",
                        })
                  case photo && photo.size > 1000000:
                        return res.status(500).send({
                              error: "Photo is required and should be less than 1mb",
                        })
            }

            const product = new productModel({
                  ...req.fields,
                  slug: slugify(name),
            })

            if (photo) {
                  product.photo.data = fs.readFileSync(photo.path);
                  product.photo.contentType = photo.type;
            }
            await product.save();
            res.status(201).send({
                  success: true,
                  message: "Product created successfully",
                  product
            })
            
      } catch (error) {
            console.log(error);
            res.status(500).send({
                  success: false,
                  message: "Error while creating product",
                  error
            })
      }
}

//update product
export const updateProductController = async (req, res) => {
      try {
            const { name, description, price, category, quantity, shipping } = req.fields;
            const { photo } = req.files;

            //validation
            switch (true) {
                  case !name:
                        return res.status(500).send({
                              error: "Name is required",
                        })
                  case !description:
                        return res.status(500).send({
                              error: "Description is required",
                        })
                  case !price:
                        return res.status(500).send({
                              error: "Price is required",
                        })
                  case !category:
                        return res.status(500).send({
                              error: "Category is required",
                        })
                  case !quantity:
                        return res.status(500).send({
                              error: "Quantity is required",
                        })
                  case photo && photo.size > 1000000:
                        return res.status(500).send({
                              error: "Photo is required and should be less than 1mb",
                        })
            }

            const product = await productModel.findByIdAndUpdate(
                  req.params.id,
                  { ...req.fields, slug: slugify(name) },
                  { new: true }
            )

            if (photo) {
                  product.photo.data = fs.readFileSync(photo.path);
                  product.photo.contentType = photo.type;
            }
            await product.save();
            res.status(201).send({
                  success: true,
                  message: "Product updated successfully",
                  product
            })
            
      } catch (error) {
            console.log(error);
            res.status(500).send({
                  success: false,
                  message: "Error while updating product",
                  error
            })
      }
}

//get products
export const getProductController = async (req, res) => { 
      try {
            const products = await productModel
                  .find({})
                  .populate("category")
                  .select("-photo")
                  .limit(12)
                  .sort({ createdAt: -1 });
            res.status(200).send({
                  success: true,
                  counTotal: products.length,
                  message: "All products",
                  products
            })
            
      } catch (error) {
            console.log(error);
            res.status(500).send({
                  success: false,
                  message: "Error while getting products",
                  error
            })
            
      }

}

//single product
export const getSingleProductController = async (req, res) => { 

      try {
            const product = await productModel
                  .findById( req.params.id )
                  .select("-photo")
                  .populate("category")
            res.status(200).send({
                  success: true,
                  message: "Get product successfully",
                  product
            })
            
      } catch (error) {
            console.log(error);
            res.status(500).send({
                  success: false,
                  message: "Error while getting product",
                  error
            })
            
      }
}

//get photo
export const productPhotoController = async (req, res) => { 
      try {
            
            const product = await productModel
                  .findById(req.params.id)
                  .select("photo")
            if (product.photo.data) {
                  res.set("Content-type", product.photo.contentType);
                  return res.send(product.photo.data);
            }
            
            
      } catch (error) {
            console.log(error);
            res.status(500).send({
                  success: false,
                  message: "Error while getting photo",
                  error
            })
            
      }
}

//delete product
export const deleteProductController = async (req, res) => { 
      try {
            await productModel
                  .findByIdAndDelete(req.params.id)
                  .select("photo")
            res.status(200).send({
                  success: true,
                  message: "Product deleted successfully",
            })
            
      } catch (error) {
            console.log(error);
            res.status(500).send({
                  success: false,
                  message: "Error while deleting product",
                  error
            })
            
      }

}

//filter products
export const filterProductController = async (req, res) => {
      try {
            const { checked, radio } = req.body
            let args = {}
            if (checked.length > 0) args.category = checked
            if (radio.length) args.price = { $gte: radio[0], $lte: radio[1] }
            const products = await productModel.find(args)
            res.status(200).send({
                  success: true,
                  products
            })
            
      } catch (error) {
            console.log(error);
            res.status(400).send({
                  success: false,
                  message: "Error while filtering product",
                  error
            })
            
      }
}

//search product
export const searchProductController = async (req, res) => {
      try {
            const { keyword } = req.params
            const result = await productModel
                  .find({
                        $or: [
                              { name: { $regex: keyword, $options: "i" } },
                              { description: { $regex: keyword, $options: "i" } }
                        ]
                  })
                  .select("-photo")
            res.json(result)
            
      } catch (error) {
            console.log(error);
            res.status(400).send({
                  success: false,
                  message: "Error while searching product",
                  error
            })
            
      }
}