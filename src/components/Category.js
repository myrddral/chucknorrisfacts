const Category = ({ category, setChosenCategory }) => {
  return (
    <p
      onClick={(e) => setChosenCategory(e.currentTarget.textContent)}
      className="category"
    >
      {category}
    </p>
  );
};

export default Category;
