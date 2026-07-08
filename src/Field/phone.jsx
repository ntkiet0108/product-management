import {useState} from "react";

export const usePhone = () => {

    const [phone, setPhone] = useState("");

    const checkPhone = phone => /^\d+$/.test(phone);

    return {
        checked: checkPhone(phone),

        getData: () => phone,

        render: () => <input
            type="tel"
            placeholder={"Số điện thoại"}
            value={phone}
            onChange={e => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) {
                    setPhone(value);
                }
            }}
        />
    }
}