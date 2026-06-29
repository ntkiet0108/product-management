import { useState } from "react";

export const SellerForm = ({initData, action}) => {

    const [name, setName]   = useState(initData?.name);
    const [price, setPrice] = useState(initData?.price);

    return (
        <>
            <div>
                <label >Tên sản phẩm </label>
                <input
                    type="text"
                    value={name ?? ""}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div>
                <label >Giá </label>
                <input
                    type="number"
                    value={price ?? ""}
                    onChange={e => setPrice(e.target.value)}
                />
            </div>

            <button
                disabled={!name || !price || price <= 0}
                onClick={() => {
                    action.onClick({name, price});
                    setName(null);
                    setPrice(null);
                }}
            >{action.label}</button>
        </>
    )
}