import {AddressData} from "./address-data.jsx";
import {useState} from "react";

export const useDistrict = ({provinceId}) => {

    const [districtId, setDistrictId] = useState("");

    const districtByProvince = AddressData.districts.filter(districts => districts.province_id === provinceId);

    const calValue = districtByProvince.some(d => d.id === districtId) ? districtId : null;

    const validateDistrict = districtId => {
        if(!districtId) return "Chưa chọn quận";
        return null;
    }

    const error = validateDistrict(calValue);

    return {
        valid: !error,

        error,

        getData: () => calValue,

        render: () => <>
            <label>Quận / Huyện </label>
            <select
                value={districtId}
                disabled={!provinceId}
                onChange={e => setDistrictId(e.target.value)}
            >
                <option value={""}></option>
                {districtByProvince.map(districts => (
                    <option
                        key={districts.id}
                        value={districts.id}
                    >{districts.name}</option>
                ))}
            </select>
            {" "}{error && error}
        </>
    }
}