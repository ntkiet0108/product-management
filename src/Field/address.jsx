import {Address} from "../Data/address.jsx";
import {useState} from "react";

export const useAddress = ({}) => {

    const [provinceId, setProvinceId] = useState("");
    const [districtId, setDistrictId] = useState("");
    const [streetId, setStreetId] = useState("");

    const districtByProvince = Address.districts.filter(districts => districts.province_id === provinceId);
    const streetByDistrict = Address.streets.filter(streets => streets.district_id === districtId);

    return {
        checked: (
            provinceId ||
            districtId ||
            streetId
        ),

        getData: () => ({
            provinceId,
            districtId,
            streetId
        }),

        render: () => <>
            <div>
                <label>Tỉnh / Thành phố </label>
                <select
                    value={provinceId}
                    onChange={e => {
                        setProvinceId(e.target.value);
                        setDistrictId("");
                        setStreetId("");
                    }}
                >
                    <option value={""}></option>
                    {Address.provinces.map(provinces => (
                        <option
                            key={provinces.id}
                            value={provinces.id}
                        >{provinces.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label>Quận / Huyện </label>
                <select
                    value={districtId}
                    disabled={!provinceId}
                    onChange={e => {
                        setDistrictId(e.target.value);
                        setStreetId("");
                    }}
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

            <div>
                <label>Đường </label>
                <select
                    value={streetId}
                    disabled={!districtId}
                    onChange={e => setStreetId(e.target.value)}
                >
                    <option value={""}></option>
                    {streetByDistrict.map(streets => (
                        <option
                            key={streets.id}
                            value={streets.id}
                        >{streets.name}</option>
                    ))}
                </select>
            </div>
        </>
    }
}