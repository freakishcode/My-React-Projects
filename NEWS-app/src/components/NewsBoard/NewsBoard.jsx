import { useState, useEffect } from "react";

// CSS
import "./NewsBoard.css";

//  TODO: External library for fetching data
// import axios from "axios";

// TODO: DATA BASE JSON
// import { BASE_URL } from "../../../data/BaseURL";

// TODO: Component to store list of NEWSpaper
import NewsCard from "../NewsCard/NewsPaper";

// eslint-disable-next-line react/prop-types
function NewsBoard({ category }) {
  //  STATE TO STORE Fetch data
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState("");

  const fetchData = () => {
    let Base_url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(Base_url)
      .then((response) => response.json())
      .then((res) => {
        setState(res.articles);
        console.log(res);
      })
      .catch((err) => setHasError(err));
  };

  useEffect(() => {
    fetchData();
  }, [category]);

  //conditional statement for if there was an Error in fetching data display this on page
  if (hasError)
    return (
      <h2 style={{ color: "red", textAlign: "center" }}>
        Something Went Wrong, Unable To Fetch Data, PLZ.. TRY AGAIN Later.
      </h2>
    );

  return (
    <div className='NewsBoard'>
      {/* Display the number of articles available */}
      <p className='records'>
        <span>Records: </span>

        {state.length === 0 ? (
          <span>No Articles found</span>
        ) : (
          state.length + " Articles"
        )}
      </p>

      <div className='stack'>
        {state &&
          state.map((news, index) => (
            // LIST OF NEWS PAPER ARTICLES
            <NewsCard
              key={index}
              src={news.urlToImage}
              title={news.title}
              description={news.description}
              url={news.url}
            />
          ))}
      </div>
    </div>
  );
}

export default NewsBoard;
