// CSS
import "./Home.css";

import { useState } from "react";

// CATEGORY NAV selection
import Categories from "../../components/Categories/Categories";

// NEWS ARTICLE
import NewsBoard from "../../components/NewsBoard/NewsBoard";

function Home() {
  const [category, setCategory] = useState("general");

  return (
    <>
      <header>
        <h1 className='Text-header'>
          Latest <span className='Text-header-news'>News</span>
        </h1>
      </header>

      {/* Selecting from categories */}
      <Categories setCategory={setCategory} />

      {/* The NEWS article Board */}
      <NewsBoard category={category} setCategory={setCategory} />
    </>
  );
}

export default Home;
