import useFetch from "../hooks/useFetch";
import Category from "./Category";

const CategoryList = ({ setChosenCategory }) => {
  const { data: categories, isPending, error } = useFetch("https://api.chucknorris.io/jokes/categories");

  if (error) alert(error);

  return (
    <div className="category-container">
      {isPending
        ? "Fetching categories..."
        : categories.map((category) => (
            <Category
            key={category}
            category={category}
            setChosenCategory={setChosenCategory} />
          ))}
    </div>
  );
};

export default CategoryList;
