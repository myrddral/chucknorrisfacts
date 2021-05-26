import useFetch from "./useFetch";

const CategoryList = (props) => {
  const { data: categories } = useFetch(
    "https://api.chucknorris.io/jokes/categories"
  );
  
  return (
    <div className="category-container">
      {!categories
        ? "Fetching categories..."
        : categories.map((category) => (
            <p
              className="category"
              key={category}
              onClick={(e) => props.setChosenCategory(e.currentTarget.textContent)}
            >
              {category}
            </p>
          ))}
    </div>
  );
};

export default CategoryList;
