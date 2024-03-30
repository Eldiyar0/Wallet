import { useState } from "react";
import { addProduct } from "../Store/slice/product";
import { useDispatch } from "react-redux";
import "./Admin.css";

const Admin = () => {
  const dispatch = useDispatch();

  const [type, setType] = useState<string>("");
  const [amount, setAmount] = useState<number>();
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string | number>();
  const [data, setData] = useState<number>();
  function handleAddProduct() {
    const newProduct = {
      id: Date.now,
      type: type,
      amount: amount,
      category: category,
      description: description,
      data: new Date().toTimeString(),
    };
    dispatch(addProduct(newProduct));
    setType("");
    setAmount("");
    setCategory("");
    setDescription("");
  }
  return (
    <div id="admin">
      <div className="container">
        <div className="admin">
          <div className="int">
            <input
              onChange={(e) => setType(e.target.value)}
              type="text"
              value={type}
              placeholder="type"
            />
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              value={amount}
              placeholder="amount"
            />
            <input
              onChange={(e) => setCategory(e.target.value)}
              type="text"
              value={category}
              placeholder="category"
            />
            <input
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              value={description}
              placeholder="description"
            />
          </div>
          <button onClick={handleAddProduct}>add</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
