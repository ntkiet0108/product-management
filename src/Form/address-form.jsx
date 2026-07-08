import {useAddress} from "../Field/address.jsx";
import {useBuyerName} from "../Field/buyer-name.jsx";
import {useDetailAddress} from "../Field/detail-address.jsx";
import {usePhone} from "../Field/phone.jsx";

export const useAddressForm = ({}) => {

    const buyerName = useBuyerName({});
    const phone = usePhone({});
    const address = useAddress({})
    const detailAddress = useDetailAddress({});

    return {
        checked: (
            !buyerName.checked ||
            !phone.checked ||
            !address.checked ||
            !detailAddress.checked
        ),

        getData: () => ({
            buyerName: buyerName.getData(),
            phone: phone.getData(),
            address: {
                detailAddress: detailAddress.getData(),
                ...address.getData(),
            }
        }),

        render: () => <>
            <div>{buyerName.render()}{" "}{phone.render()}</div>

            {address.render()}

            {detailAddress.render()}
        </>
    }
}