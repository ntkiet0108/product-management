import {AddressData} from "./address-data.jsx";
import {useState} from "react";

export const useProvince = ({}) => {

    const [provinceId, setProvinceId] = useState("");

    return {
        checked: provinceId,

        getData: () => provinceId,

        render: () => <div>
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
        </div>
    }
}