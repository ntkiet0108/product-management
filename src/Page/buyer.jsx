import {useState} from "react";
import {AddressForm} from "../address-form.jsx";

export const Buyer = ({list, order, setOrder}) => {

    const [buyerName, setBuyerName] = useState("");
    const [phone, setPhone] = useState("");
    const [provinceId, setProvinceId] = useState(null);
    const [districtId, setDistrictId] = useState(null);
    const [streetId, setStreetId] = useState(null);
    const [detailAddress, setDetailAddress] = useState("");

    const checkBuyerName = buyerName => {
        return buyerName.trim() && !/\d/.test(buyerName)
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

            <AddressForm
                buyerName={buyerName} setBuyerName={setBuyerName}
                phone={phone} setPhone={setPhone}
                provinceId={provinceId} setProvinceId={setProvinceId}
                districtId={districtId} setDistrictId={setDistrictId}
                streetId={streetId} setStreetId={setStreetId}
                detailAddress={detailAddress} setDetailAddress={setDetailAddress}
            />

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