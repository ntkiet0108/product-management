import { useState } from "react";

export const Buyer = ({list, order, setOrder}) => {

    const [address, setAddress] = useState("");

    const buy = value => {
        if(!address){
            alert("Nhập địa chỉ")
            return;
        }
        setOrder([...order, {
            id: order.length + 1,
            name: value.name,
            address,
            status: "pending"
        }]);
    }

    return (
        <>
            <h2>Người mua</h2>
            <label>Địa chỉ giao hàng</label>
            <input
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />

            <ul>
                {list.map(value => (
                    <li key={value.id}>
                        {value.name + " " + value.price + " VND "}
                        <button onClick={() => buy(value)}>Mua</button>
                    </li>
                ))}
            </ul>
        </>
    )
}