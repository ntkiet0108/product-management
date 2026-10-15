import express from "express";
import cors from "cors";
import {readFile,writeFile} from "fs/promises";

const app = express();
app.set("json spaces", 4);
app.use(cors());
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

app.put("/products/:id", async (req, res) => {
    const id = Number(req.params.id);
    const product = req.body;

    const error = validateProduct(product);
    if(error) return res.status(400).json({error});

    const products = await loadProducts();

    const index = products.findIndex(i => i.id === id);
    if(index === -1) {
        return res.status(404).json({
            error: "Không tìm thấy sản phẩm"
        });
    }

    const updatedProduct = {
        id,
        name: product.name,
        price: Number(product.price)
    };

    products[index] = updatedProduct;
    await saveProducts(products);

    res.json(updatedProduct);
});

app.delete("/products/:id", async (req, res) => {
    const id = Number(req.params.id);
    const products = await loadProducts();

    const index = products.findIndex(i => i.id === id);
    if(index === -1) {
        return res.status(404).json({
            error: "Không tìm thấy sản phẩm"
        });
    }

    const deletedProduct = products.splice(index, 1)[0];
    await saveProducts(products);

    res.json(deletedProduct);
});

app.listen(3000, () => {
    console.log("Server started");
});