import "./css/App.css";
import CategoryList from "./components/CategoryList";
import FetchedJoke from "./components/FetchedJoke";
import { useState } from "react";

function App() {
  const [chosenCategory, setChosenCategory] = useState(null);

  return (
    <div className="container">
      <h1 style={{ paddingLeft: 30 }}>Chuck Norris jokes</h1>
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
