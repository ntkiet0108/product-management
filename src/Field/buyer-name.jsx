import {useState} from "react";

export const useBuyerName = ({}) => {

    const [buyerName, setBuyerName] = useState("");

    const validateBuyerName = buyerName => {
        if(!buyerName.trim()) return "Không được để trống";
        if(/\d/.test(buyerName)) return "Chỉ được nhập chữ";
        return null;
    }

    const error = validateBuyerName(buyerName);

    return {
        valid: !error,

        error,

        getData: () => buyerName,

        render: () => <>
            <input
                type="text"
                placeholder={"Họ và tên"}
                value={buyerName}
                onChange={e => setBuyerName(e.target.value)}
            />
            {" "}{error && error}
        </>
    }
}