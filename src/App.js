import React from "react";
import "./App.css";

function App() {
  /**
   * Challenge: See if you can do it all again by yourself :)
   */

  const [thingsArray, setthingsArray] = React.useState(["Thing 1", "Thing 2"]);

  function addItem() {
    // Build from scratch :)
    setthingsArray((prevState) => {
      return [...prevState, `Things ${prevState.length + 1}`];
    });
  }
  // const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

  // function addItem() {
  //     // We'll work on this next
  //     setThingsArray(prevThingsArray => {
  //         return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
  //     })
  // }
  const thingsElements = thingsArray.map((thing) => <p key={thing}>{thing}</p>);

  return (
    <div>
      <button onClick={addItem}>Add Item</button>
      {thingsElements}
    </div>
  );
}

export default App;
