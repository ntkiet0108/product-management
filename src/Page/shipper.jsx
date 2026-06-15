export const Shipper = ({order, setOrder}) => {

    const update = (id, status) => {
        const newStatus = order.map(value => {
            if(value.id !== id) return value;
            return {...value, status}
        })
        setOrder(newStatus);
    }

    return (
        <>
            <h2>Shipper</h2>
            <ul>
                {order.map(value => (
                    <li key={value.id}>
                        {"Sản phẩm: " + value.name}
                        <br/>
                        {"Địa chỉ: " + value.address}
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