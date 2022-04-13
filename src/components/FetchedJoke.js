import useFetch from "../hooks/useFetch";

const FetchedJoke = ({ chosenCategory }) => {
  const { data: joke, isPending } = useFetch(
    `https://api.chucknorris.io/jokes/random?category=${chosenCategory}`
  );
  
  return (
    <div className="joke-container">
        {isPending ? "Fetching joke..." : <h3 className="joke-text">{ joke.value }</h3>}
    </div>
  );
};

export default FetchedJoke;
