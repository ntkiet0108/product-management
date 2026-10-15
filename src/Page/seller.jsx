import { useState } from "react";
import { SellerForm } from "../Form/seller-form.jsx";
import {createProduct, deleteProduct, updateProduct} from "../api/product-api.js";

export const Seller = ({list, setList}) => {

    const [editId, setEditId] = useState(null);

    const del = async (id) => {
        try {
            await deleteProduct(id);

            setList(list => list.filter(i => i.id !== id));
        } catch (e) {
            alert(e.message);
        }
    }

    return (
        <>
            <h2>Chủ shop</h2>
            <SellerForm
                key={editId}
                initData={!editId ? null : list.find((e) => e.id === editId)}
                action={editId == null ? {
                    label: "Thêm",
                    onClick: async ({name, price}) => {
                        try {
                            const newProduct = await createProduct({
                                name,
                                price: Number(price)
                            });
                            setList(list => [...list, newProduct]);
                        } catch(e) {
                            alert(e.message);
                        }
                    },
                } : {
                    label: "Cập nhật",
                    onClick: async ({name, price}) => {
                        try {
                            const updatedProduct = await updateProduct({
                                id: editId,
                                name,
                                price: Number(price)
                            });

                            setList(list => list.map(i =>
                                i.id === editId
                                    ? updatedProduct
                                    : i
                            ));

                            setEditId(null);
                        } catch (e) {
                            alert(e.message);
                        }
                    },
                }}
            />
            <ul>
                {list.map(value => (
                    <li key={value.id}>
                        {value.name + " " + value.price + " VND "}
                        <button onClick={() => del(value.id)}>Xóa</button>
                        <button onClick={() => setEditId(value.id)}>Sửa</button>
                    </li>
                ))}
            </ul>
            <div>{"Tổng tiền: " + list.reduce((total, value) => total + value.price, 0) + " VND"}</div>
        </>
    )
}