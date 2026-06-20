import { Address } from "../address.jsx";

export const Shipper = ({order, setOrder}) => {

    const update = (id, status) => {
        const newStatus = order.map(value => {
            if(value.id !== id) return value;
            return {...value, status}
        })
        setOrder(newStatus);
    }

    const displayAddress = (address) => {
        const province = Address.provinces.find(province => province.id === address.provinceId);
        const district = Address.districts.find(district => district.id === address.districtId);
        const street = Address.streets.find(street => street.id === address.streetId);

        return street.name + ", " + district.name + ", " + province.name;
    }

    return (
        <>
            <h2>Shipper</h2>
            <ul>
                {order.map(value => (
                    <li key={value.id}>
                        {"Sản phẩm: " + value.name}
                        <br/>
                        {"Địa chỉ: " + displayAddress(value.address)}
                        <br/>
                        {"Trạng thái: " + value.status}
                        <br/>
                        <button onClick={() => update(value.id, "shipping")}>Nhận đơn</button>
                        <button onClick={() => update(value.id, "completed")}>Đã giao</button>
                    </li>
                ))}
            </ul>
        </>
    )
}