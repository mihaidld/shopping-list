import React from "react";

const AddProductForm = (props) => {
  const { shopping, addToShoppingList } = props;
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const product = event.target.elements.product.value;
    if (!shopping.includes(product)) {
      addToShoppingList(event.target.elements.product.value);
    } else {
      alert(`${product} is already on the list`);
    }

    event.target.reset();
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="input-group mb-2">
        <label className="input-group-text" htmlFor="product">
          Add to my list
        </label>
        <input className="form-control" id="product" required />
      </div>
      <button type="submit" className="btn btn-primary">
        Add !
      </button>
    </form>
  );
};

export default AddProductForm;
