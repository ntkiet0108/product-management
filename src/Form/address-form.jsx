import {useBuyerName} from "../Field/buyer-name.jsx";
import {usePhone} from "../Field/phone.jsx";
import {useAddress} from "../Field/Address/address.jsx";
import {mergeField} from "../Field/merge-field.jsx";

export const useAddressForm = ({}) => {

    const buyerNameField = useBuyerName({});
    const phoneField = usePhone({});
    const addressField = useAddress({})

    const field = mergeField({
        buyerName: buyerNameField,
        phone: phoneField,
        address: addressField
    })

    return {
        ...field,

        render: () => <>
            <div>{buyerNameField.render()}</div>
            <div>{phoneField.render()}</div>
            <div>{addressField.render()}</div>
        </>
    }
}