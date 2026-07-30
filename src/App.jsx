import {useEffect, useState} from 'react'
import {Seller} from "./Page/seller.jsx";
import {Buyer} from "./Page/buyer.jsx";
import {Admin} from "./Page/admin.jsx";
import {Shipper} from "./Page/shipper.jsx";

export const App = () => {

    const [role, setRole] = useState("");
    const [list, setList] = useState([]);
    const [order, setOrder] = useState([]);

    useEffect(() => {
        const loadProducts =  async () => {
            const res = await fetch("http://localhost:3000/products");
            const products = await res.json();
            setList(products);
        };
        loadProducts();
    }, []);

    return (
        <>
            <button onClick={() => setRole("seller")}>Chủ shop</button>
            <button onClick={() => setRole("buyer")}>Người mua</button>
            <button onClick={() => setRole("admin")}>Admin</button>
            <button onClick={() => setRole("shipper")}>Shipper</button>

            {role === "seller" && (
                <Seller
                    list={list}
                    setList={setList}
                />
            )}

            {role === "buyer" && (
                <Buyer
                    list={list}
                    order={order}
                    setOrder={setOrder}
                />
            )}

            {role === "admin" && (<Admin/>)}

            {role === "shipper" && (
                <Shipper
                    order={order}
                    setOrder={setOrder}
                />
            )}
        </>
    )
}

export default App