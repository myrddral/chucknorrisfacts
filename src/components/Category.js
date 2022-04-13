const Category = ({ category, setChosenCategory }) => {
  
  const handleClick = (e) => setChosenCategory(e.currentTarget.textContent);

  return (
    <ul className="category" onClick={handleClick}>
      {category}
    </ul>
  );
};

export default Category;
