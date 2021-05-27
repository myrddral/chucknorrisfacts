import useFetch from "../useFetch";
import Category from "./Category";

const CategoryList = (props) => {
  const { data: categories } = useFetch(
    "https://api.chucknorris.io/jokes/categories"
  );

  return (
    <div className="category-container">
      {!categories
        ? "Fetching categories..."
        : categories.map((category) => (
            <Category
              key={category}
              category={category}
              setChosenCategory={props.setChosenCategory}
            />
          ))}
    </div>
  );
};

export default CategoryList;
