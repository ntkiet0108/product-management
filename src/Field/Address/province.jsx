import {AddressData} from "./address-data.jsx";
import {useState} from "react";

export const useProvince = ({}) => {

    const [provinceId, setProvinceId] = useState("");

    const validateProvince = provinceId => {
        if (!provinceId) return "Chưa chọn tỉnh/thành phố";
        return null;
    }

    const error = validateProvince(provinceId);

    return {
        valid: !error,

        error,

        getData: () => provinceId,

        render: () => <>
            <label>Tỉnh / Thành phố </label>
            <select
                value={provinceId}
                onChange={e => {
                    setProvinceId(e.target.value);
                }}
            >
                <option value={""}></option>
                {AddressData.provinces.map(provinces => (
                    <option
                        key={provinces.id}
                        value={provinces.id}
                    >{provinces.name}</option>
                ))}
            </select>
            {" "}{error && error}
        </>
    }
}