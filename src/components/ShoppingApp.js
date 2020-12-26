import React, { useState, useEffect } from "react";
import AddPopularProducts from "./AddPopularProducts";
import ShoppingList from "./ShoppingList";
import AddProductForm from "./AddProductForm";

const ShoppingApp = () => {
  /*  La valeur initiale de shopping est utilisée uniquement une fois, au moment
  ou le component monte, pourtant l'expression
  JSON.parse(localStorage.getItem('myShoppingList')) || [] sera évaluée à chaque
  render. Pour y remedier on met en place lazy initial state: useState(() =>
  expensiveOperationFunction()) ou useState(expensiveOperationFunction) */
  const getLocalStorage = () =>
    JSON.parse(localStorage.getItem("myShoppingList")) || [];

  const [shopping, setShopping] = useState(getLocalStorage);

  const addToShoppingList = (product) => {
    setShopping([...shopping, product]);
  };

  const removeFromShoppingList = (product) => {
    setShopping(shopping.filter((el) => el !== product));
  };

  useEffect(() => {
    //console.log("changement");
    document.title = shopping.length
      ? `You need to buy ${shopping.length} products`
      : "Prepare your shopping list";
  }, [shopping.length]);

  useEffect(() => {
    //on enregistre dans localStorage quand shopping change
    localStorage.setItem("myShoppingList", JSON.stringify(shopping));
  }, [shopping]);

  return (
    <section>
      <h2 className="mb-3">Products to buy</h2>
      <AddPopularProducts
        shopping={shopping}
        addToShoppingList={addToShoppingList}
      />
      <ShoppingList
        shopping={shopping}
        removeFromShoppingList={removeFromShoppingList}
      />
      <AddProductForm
        shopping={shopping}
        addToShoppingList={addToShoppingList}
      />
    </section>
  );
};

export default ShoppingApp;
