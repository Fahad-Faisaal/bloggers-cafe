import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>Bloggers Cafe</h1>
      <picture>
        <img src="/src/assets/images/profile.png" alt="User Profile Picture" />
      </picture>
    </div>
  );
};

export default Header;
