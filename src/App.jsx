import { useState } from 'react'
import { Form } from "./form.jsx";

const App = () => {
  const [editId, setEditId] = useState(null);
  const [list, setList] = useState([
    {
      id: 1,
      name: "Bút bi",
      price: 5000
    },
    {
      id: 2,
      name: "Vở",
      price: 10000
    }
  ]);

  const del = i => {
    const remove = list.filter((value, index) => i != index);
    setList(remove);
  }

  return (
      <>
        <Form
            key={editId}
            initData={!editId ? null : list.find((e) => e.id === editId)}
            action={editId == null ? {
              label: "Thêm",
              onClick: ({name, price}) => {
                setList([...list,{
                  id: list.length+1,
                  name: name,
                  price: Number(price)
                }]);
              },
            } : {
              label: "Cập nhật",
              onClick: ({name, price}) => {
                const updatedList = list.map((value) => {
                  if(value.id != editId) return value;
                  return {
                    ...value,
                    name: name,
                    price: Number(price)
                  }
                })
                setList(updatedList);
                setEditId(null);
              },
            }}
        />
        <hr />
        <ul>
          {list.map((value, index) => (
              <li key={value.id}>
                {value.name + " " + value.price + " VND "}
                <div>
                  <button onClick={() => del(index)}>Xóa</button>
                  <button onClick={() => setEditId(value.id)}>Sửa</button>
                </div>
              </li>
          ))}
        </ul>
        <hr />
        <div>
          {"Tổng tiền: "}
          {list.reduce((total, value) => total + value.price, 0)}
          {" VND"}
        </div>
      </>
  )
}

export default App
