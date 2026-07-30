import {useState} from "react";

export const useDetailAddress = ({}) => {

    const [detailAddress, setDetailAddress] = useState("");

    const validateDetailAddress = detailAddress => {
        if(!detailAddress.trim()) return "Không được để trống";
        return null;
    }

    const error = validateDetailAddress(detailAddress);

    return {
        valid: !error,

        error,

        getData: () => detailAddress,

        render: () => <>
            <input
                type="text"
                placeholder={"Địa chỉ cụ thể"}
                value={detailAddress}
                onChange={e => setDetailAddress(e.target.value)}
            />
            {" "}{error && error}
        </>
    }
}