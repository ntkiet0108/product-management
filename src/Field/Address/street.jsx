import {AddressData} from "./address-data.jsx";
import {useState} from "react";

export const useStreet = ({districtId}) => {

    const [streetId, setStreetId] = useState("");

    const streetByDistrict = AddressData.streets.filter(streets => streets.district_id === districtId);

    const calValue = streetByDistrict.some(s => s.id === streetId) ? streetId : null;

    return {
        checked: calValue,

        getData: () => calValue,

        render: () => <div>
            <label>Đường </label>
            <select
                value={streetId}
                disabled={!districtId}
                onChange={e => setStreetId(e.target.value)}
            >
                <option value={""}></option>
                {streetByDistrict.map(streets => (
                    <option
                        key={streets.id}
                        value={streets.id}
                    >{streets.name}</option>
                ))}
            </select>
        </div>
    }
}