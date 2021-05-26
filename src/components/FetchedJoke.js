import useFetch from "./useFetch";

const FetchedJoke = ({ chosenCategory }) => {
  const joke = useFetch(
    `https://api.chucknorris.io/jokes/random?category=${chosenCategory}`
  );
  
  return (
    <div className="joke-container">
        {!joke.data ? "Fetching joke..." : <h3>{joke.data.value}</h3>}
    </div>
  );
};

export default FetchedJoke;
