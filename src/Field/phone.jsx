import {useState} from "react";

export const usePhone = () => {

    const [phone, setPhone] = useState("");

    const validatePhone = phone => {
        if(!phone.trim()) return "Không được để trống";
        if(!/^\d+$/.test(phone)) return "Chỉ được nhập số";
        return null;
    };

    const error = validatePhone(phone);

    return {
        valid: !error,

        error,

        getData: () => phone,

        render: () => <>
            <input
                type="tel"
                placeholder={"Số điện thoại"}
                value={phone}
                onChange={e => setPhone(e.target.value)}
            />
            {" "}{error && error}
        </>
    }
}