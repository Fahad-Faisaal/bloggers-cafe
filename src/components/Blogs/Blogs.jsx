/* eslint-disable react/prop-types */
import Blog from "../Blog/Blog";
import "./Blogs.css";

function Blogs({ blogs, handleRead }) {
  return (
    <div className="blogs">
      {blogs.map((blog) => (
        <Blog key={blog.id} blog={blog} handleRead={handleRead} />
      ))}
    </div>
  );
}

export default Blogs;
