import React from "react";
import AppContainer from "./components/AppContainer";
import ShoppingApp from "./components/ShoppingApp";
import ModeSwitch from "./components/ModeSwitch";
import ModeContextProvider from "./context/ModeContext";

function App() {
  return (
    <ModeContextProvider>
      <AppContainer>
        <header className="App-header d-flex justify-content-between flex-wrap align-items-center mb-5">
          <h1>My Shopping List</h1>
          <ModeSwitch />
        </header>
        <ShoppingApp />
      </AppContainer>
    </ModeContextProvider>
  );
}

export default App;
