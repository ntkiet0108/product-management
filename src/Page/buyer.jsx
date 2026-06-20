import { useState } from "react";
import {Address} from "../address.jsx";

export const Buyer = ({list, order, setOrder}) => {

    const [provinceId, setProvinceId] = useState(null);
    const [districtId, setDistrictId] = useState(null);
    const [streetId, setStreetId] = useState(null);

    const districtByProvince = Address.districts.filter(districts => districts.province_id === provinceId);
    const streetByDistrict = Address.streets.filter(streets => streets.district_id === districtId);

    const buy = value => {
        if(!provinceId || !districtId || !streetId){
            alert("Chọn đầy đủ địa chỉ")
            return;
        }

        setOrder([...order, {
            id: order.length + 1,
            name: value.name,
            address: {
                provinceId: provinceId,
                districtId: districtId,
                streetId: streetId
            },
            status: "pending"
        }]);
    }

    return (
        <>
            <h2>Người mua</h2>

            <div>
                <label>Tỉnh / Thành phố </label>
                <select
                    value={provinceId}
                    onChange={e => {
                        setProvinceId(e.target.value);
                        setDistrictId(null);
                        setStreetId(null);
                    }}
                >
                    <option value=""></option>
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
                        setStreetId(null);
                    }}
                >
                    <option value=""></option>
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
                    <option value=""></option>
                    {streetByDistrict.map(streets => (
                        <option
                            key={streets.id}
                            value={streets.id}
                        >{streets.name}</option>
                    ))}
                </select>
            </div>
            { }
            <ul>
                {list.map(value => (
                    <li key={value.id}>
                        {value.name + " " + value.price + " VND "}
                        <button onClick={() => buy(value)}>Mua</button>
                    </li>
                ))}
            </ul>
        </>
    )
}