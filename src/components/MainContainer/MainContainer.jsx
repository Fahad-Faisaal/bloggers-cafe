import "./MainContainer.css";
import Blogs from "../Blogs/Blogs";
import Stats from "../Stats/Stats";
import { useState } from "react";
import { useEffect } from "react";

function MainContainer() {
  const [blogs, setBlogs] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleRead = (time) => {
    setReadTime((prevReadTime) => prevReadTime + time);
  };

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
      });
  }, []);

  return (
    <div className="main-container">
      <Blogs handleRead={handleRead} blogs={blogs} />
      <Stats readTime={readTime} />
    </div>
  );
}

export default MainContainer;
