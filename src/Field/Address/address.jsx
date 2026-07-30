import {useProvince} from "./province.jsx";
import {useDistrict} from "./district.jsx";
import {useStreet} from "./street.jsx";
import {useDetailAddress} from "./detail-address.jsx";
import {mergeField} from "../merge-field.jsx";

export const useAddress = ({}) => {

    const provinceField = useProvince({});
    const districtField = useDistrict({provinceId: provinceField.getData()});
    const streetField = useStreet({districtId: districtField.getData()});
    const detailAddressField = useDetailAddress({});

    const field = mergeField({
        provinceId: provinceField,
        districtId: districtField,
        streetId: streetField,
        detailAddress: detailAddressField,
    });

    return {
        ...field,

        render: () => <>
            <div>{provinceField.render()}</div>
            <div>{districtField.render()}</div>
            <div>{streetField.render()}</div>
            <div>{detailAddressField.render()}</div>
        </>
    }
}