import { useState } from "react";
import "./css/App.css";
import CategoryList from "./components/CategoryList";
import FetchedJoke from "./components/FetchedJoke";

function App() {
  const [chosenCategory, setChosenCategory] = useState(null);

  return (
    <div className="container">
      <h1 className="header">Chuck Norris jokes</h1>
      <div className="main">
        <CategoryList setChosenCategory={setChosenCategory} />
        {!chosenCategory ? (
          <h3>Select a category to get a joke!</h3>
        ) : (
          <FetchedJoke chosenCategory={chosenCategory} />
        )}
      </div>
    </div>
  );
}

export default App;
