import {useProvince} from "./province.jsx";
import {useDistrict} from "./district.jsx";
import {useStreet} from "./street.jsx";

export const useAddress = ({}) => {

    const province = useProvince({});
    const district = useDistrict({provinceId: province.getData()});
    const street = useStreet({districtId: district.getData()});

    return {
        checked: (
            province.checked &&
            district.checked &&
            street.checked
        ),

        getData: () => ({
            provinceId: province.getData(),
            districtId: district.getData(),
            streetId: street.getData()
        }),

        render: () => <>
            {province.render()}
            {district.render()}
            {street.render()}
        </>
    }
}