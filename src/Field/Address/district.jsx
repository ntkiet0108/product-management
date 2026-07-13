import {AddressData} from "./address-data.jsx";
import {useState} from "react";

export const useDistrict = ({provinceId}) => {

    const [districtId, setDistrictId] = useState("");

    const districtByProvince = AddressData.districts.filter(districts => districts.province_id === provinceId);

    const calValue = districtByProvince.some(d => d.id === districtId) ? districtId : null;

    return {
        checked: calValue,

        getData: () => calValue,

        render: () => <div>
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
        </div>
    }
}