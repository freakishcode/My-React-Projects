// css
import "./Categories.css";

// eslint-disable-next-line react/prop-types
function Categories({ setCategory }) {
  return (
    <div className='category'>
      <ol>
        <li onClick={() => setCategory("business")}>Business</li>
        <li onClick={() => setCategory("entertainment")}>Entertainment</li>
        <li onClick={() => setCategory("general")}>General</li>
        <li onClick={() => setCategory("health")}>Health</li>
        <li onClick={() => setCategory("science")}>Science</li>
        <li onClick={() => setCategory("sport")}>Sport</li>
        <li onClick={() => setCategory("technology")}>Technology</li>
      </ol>
    </div>
  );
}

export default Categories;
