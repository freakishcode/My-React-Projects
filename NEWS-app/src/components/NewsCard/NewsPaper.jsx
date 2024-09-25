/* eslint-disable react/prop-types */
// CSS
import "./NewsPaper.css";

// condition to check if an image exist if not use default image
import DefaultImage from "../assets/news.jpg";

function NewsItem({ src, title, description, url }) {
  return (
    <div className='card'>
      <img src={src ? src : DefaultImage} alt='News card image' />
      <div className='card-body'>
        <h5 className='card-title'>{title.slice(0, 50)}</h5>
        <p className='card-text'>
          {description ? description : "News at its best for the worlds"}
        </p>
        <a href={url} className='linkBtn'>
          Read More
        </a>
      </div>
    </div>
  );
}

export default NewsItem;
