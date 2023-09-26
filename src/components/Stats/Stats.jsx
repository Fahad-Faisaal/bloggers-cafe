/* eslint-disable react/prop-types */
import TimeSpent from "../TimeSpent/TimeSpent";
import Bookmarks from "../Bookmarks/Bookmarks";
import "./Stats.css";

function Stats({ readTime }) {
  return (
    <div className="stats">
      <TimeSpent readTime={readTime} />
      <Bookmarks />
    </div>
  );
}

export default Stats;
