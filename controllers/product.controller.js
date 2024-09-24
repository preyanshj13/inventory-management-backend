import Product from "../models/products.models.js";

// export const test = (req,res) =>{
//     res.json({
//         message: "Hi"
//     })
// }

export const fetchProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.log(error);
    res.send("error occured in Fetching products ", error);
  }
};

export const createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    // console.log(req.body);oi98
    await product.save();
    res.send(product);
  } catch (error) {
    console.log(error);
    res.send("error occured in Adding product ", error);
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndDelete(id);
    // console.log(req.params);
    if(!product){
      return res.send("Product does not exist.")
    }
    res.send("Product " + product.productName + " Deleted");
  } catch (error) {
    console.log(error);
    res.send("error occured in Deleting product ", error);
  }
};

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(product);
  } catch (error) {
    console.log(error);
    res.send("error occured in Editing product ", error);
  }
};

export const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);
    res.send(product);
  } catch (error) {
    console.log(error);
    res.send("error occured in Fetching product by ID", error);
  }
};

