/* eslint-disable react/prop-types */
import "./Blog.css";
import { BsBookmark } from "react-icons/bs";

function Blog({ blog, handleRead }) {
  const { name, cover, picture, registered, time, about, tags } = blog;

  return (
    <div className="blog">
      <picture>
        <img className="cover" src={cover} alt="" />
      </picture>
      <div className="blog-info">
        <div className="info">
          <div className="left">
            <picture className="picture">
              <img className="picture" src={picture} alt="" />
            </picture>
            <div className="author-name-time">
              <h4 className="author-name">{name}</h4>
              <p className="time">{registered}</p>
            </div>
          </div>
          <div className="right">
            <p className="read-time">{time} min read</p>
            <BsBookmark className="bookmark-icon" />
          </div>
        </div>
        <h3 className="about">{about}</h3>
        <ul className="tags">
          {tags.map((tag, i) => {
            return <li key={i}>#{tag}</li>;
          })}
        </ul>
        <div onClick={() => handleRead(time)}>
          <button className="btn">Mark as Read</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
