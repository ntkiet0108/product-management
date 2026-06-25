import { useState } from "react";
import {Address} from "../address.jsx";

export const Buyer = ({list, order, setOrder}) => {

    const [buyerName, setBuyerName] = useState("");
    const [phone, setPhone] = useState("");
    const [provinceId, setProvinceId] = useState(null);
    const [districtId, setDistrictId] = useState(null);
    const [streetId, setStreetId] = useState(null);
    const [detailAddress, setDetailAddress] = useState("");

    const districtByProvince = Address.districts.filter(districts => districts.province_id === provinceId);
    const streetByDistrict = Address.streets.filter(streets => streets.district_id === districtId);

    const checkBuyerName = buyerName => {
        return buyerName.trim() && !/\d/.test(name)
    }

    const checkPhone = phone => {
        return /^\d+$/.test(phone);
    }

    const buy = value => {
        setOrder([...order, {
            id: order.length + 1,
            name: value.name,
            buyerName,
            phone,
            address: {
                provinceId,
                districtId,
                streetId,
                detailAddress
            },
            status: "pending"
        }]);
    }

    return (
        <>
            <h2>Người mua</h2>

            <div>
                <input
                    type="text"
                    placeholder={"Họ và tên"}
                    value={buyerName}
                    onChange={e => setBuyerName(e.target.value)}
                />
                {" "}
                <input
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
            </div>

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
                    <option value={null}></option>
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
                    <option value={null}></option>
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
                    <option value={null}></option>
                    {streetByDistrict.map(streets => (
                        <option
                            key={streets.id}
                            value={streets.id}
                        >{streets.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <input
                    type="Text"
                    placeholder={"Địa chỉ cụ thể"}
                    value={detailAddress}
                    onChange={e => setDetailAddress(e.target.value)}
                />
            </div>

            <ul>
                {list.map(value => (
                    <li key={value.id}>
                        {value.name + " " + value.price + " VND "}
                        <button
                            disabled={!checkBuyerName(buyerName) || !checkPhone(phone) || !provinceId || !districtId || !streetId || !detailAddress.trim()}
                            onClick={() => buy(value)}
                        >Mua</button>
                    </li>
                ))}
            </ul>
        </>
    )
}