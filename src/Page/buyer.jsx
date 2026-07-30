import {useAddressForm} from "../Form/address-form.jsx";

export const Buyer = ({list, order, setOrder}) => {

    const form = useAddressForm({});

    const buy = value => {
        setOrder([...order, {
            id: order[order.length-1].id + 1,
            name: value.name,
            status: "pending",

            ...form.getData()
        }]);
    }

    return (
        <>
            <h2>Người mua</h2>

            {form.render()}

            <ul>
                {list.map(value => (
                    <li key={value.id}>
                        {value.name + " " + value.price + " VND "}
                        <button
                            disabled={!form.valid}
                            onClick={() => buy(value)}
                        >Mua</button>
                    </li>
                ))}
            </ul>
        </>
    )
}