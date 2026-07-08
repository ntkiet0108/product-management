import {useState} from "react";

export const useBuyerName = ({}) => {

    const [buyerName, setBuyerName] = useState("");

    const checkBuyerName = buyerName => buyerName.trim() && !/\d/.test(buyerName);

    return {
        checked: checkBuyerName(buyerName),

        getData: () => buyerName,

        render: () => <input
            type="text"
            placeholder={"Họ và tên"}
            value={buyerName}
            onChange={e => setBuyerName(e.target.value)}
        />
    }
}