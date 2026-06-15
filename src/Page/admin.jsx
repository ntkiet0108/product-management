import {useState} from "react";

export const Admin = () => {

    const [user, setUser] = useState([]);
    const [userName, setUserName] = useState("");

    const create = () => {
        setUser([...user, {
            id: user.length + 1,
            name: userName
        }]);
        setUserName("");
    }

    return (
        <>
            <h2>Admin</h2>
            <label>Username</label>
            <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
            />

            <button onClick={() => create()}>Tạo tài khoản</button>

            <ul>
                {user.map(value => (
                    <li key={value.id}>
                        {value.name}
                    </li>
                ))}
            </ul>
        </>
    )
}