import express from "express";
import {readFile,writeFile} from "fs/promises";

const app = express();
app.set("json spaces", 4);
app.use(express.json());

const validateProduct = product => {
    if (!product.name?.trim()) return "Nhập tên sản phẩm";
    if (!product.price) return "Nhập giá";
    if (product.price <= 0) return "Giá phải lớn hơn 0";
    return null;
}

const loadProducts = async () => {
    const json = await readFile("./server/data/products.json", "utf8");
    return JSON.parse(json);
};

const saveProducts = async (products) => {
    const json = JSON.stringify(products, null, 4);
    await writeFile("./server/data/products.json", json, "utf-8");
};

app.get("/products", async (req, res) => {
    const products = await loadProducts();
    res.json(products);
});

app.post("/products", async (req, res) => {
   const product = req.body;

   const error = validateProduct(product);
   if(error) return res.status(400).json({error});

   const products = await loadProducts();

   const newProduct = {
       id: products[products.length - 1].id + 1,
       ...product
   };

   products.push(newProduct);
   await saveProducts(products);
   res.status(201).json(newProduct);
});


app.listen(3000, () => {
    console.log("Server started");
});