import React, { useContext } from "react";
import { ModeContext } from "./../context/ModeContext";

const AddPopularProducts = (props) => {
  const { shopping, addToShoppingList } = props;
  const { mode } = useContext(ModeContext);
  const populars = ["salt", "sugar", "bread", "milk", "butter", "oil"];
  const buttonClass = mode === "dark" ? "btn-outline-light" : "btn-dark";
  return (
    <div className="mb-3 d-flex flex-wrap align-items-center">
      You might need
      {populars.map((el) => (
        <button
          type="button"
          key={el}
          className={`btn btn-sm ${buttonClass} mx-1`}
          onClick={() => addToShoppingList(el)}
          disabled={shopping.includes(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default AddPopularProducts;
