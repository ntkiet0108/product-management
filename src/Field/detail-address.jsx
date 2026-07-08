import {useState} from "react";

export const useDetailAddress = ({}) => {

    const [detailAddress, setDetailAddress] = useState("");

    return {
        checked: detailAddress.trim(),

        getData: () => detailAddress,

        render: () => <div>
            <input
                type="text"
                placeholder={"Địa chỉ cụ thể"}
                value={detailAddress}
                onChange={e => setDetailAddress(e.target.value)}
            />
        </div>
    }
}