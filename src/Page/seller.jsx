import { useState } from "react";
import { SellerForm } from "../seller-form.jsx";

export const Seller = ({list, setList}) => {

    const [editId, setEditId] = useState(null);

    const del = i => {
        const remove = list.filter((value) => i !== value.id);
        setList(remove);
    }

    return (
        <>
            <h2>Chủ shop</h2>
            <SellerForm
                key={editId}
                initData={!editId ? null : list.find((e) => e.id === editId)}
                action={editId == null ? {
                    label: "Thêm",
                    onClick: ({name, price}) => {
                        setList([...list,{
                            id: list.length+1,
                            name: name,
                            price: Number(price)
                        }]);
                    },
                } : {
                    label: "Cập nhật",
                    onClick: ({name, price}) => {
                        const updatedList = list.map((value) => {
                            if(value.id !== editId) return value;
                            return {
                                ...value,
                                name: name,
                                price: Number(price)
                            }
                        })
                        setList(updatedList);
                        setEditId(null);
                    },
                }}
            />
            <ul>
                {list.map((value, index) => (
                    <li key={value.id}>
                        {value.name + " " + value.price + " VND "}
                        <button onClick={() => del(index)}>Xóa</button>
                        <button onClick={() => setEditId(value.id)}>Sửa</button>
                    </li>
                ))}
            </ul>
            <div>{"Tổng tiền: " + list.reduce((total, value) => total + value.price, 0) + " VND"}</div>
        </>
    )
}