import { useState } from "react";
import CategoryList from "./CategoryList";
import FetchedJoke from "./FetchedJoke";

const ChuckNorrisJokes = () => {
  const [chosenCategory, setChosenCategory] = useState(null);

  return (
    <div className="container">
      <h1 className="header">Chuck Norris jokes</h1>
      <div className="main">
        <CategoryList setChosenCategory={setChosenCategory} />
        {!chosenCategory ? <h3>Select a category to get a joke!</h3> : <FetchedJoke chosenCategory={chosenCategory} />}
      </div>
    </div>
  );
};

export default ChuckNorrisJokes;
