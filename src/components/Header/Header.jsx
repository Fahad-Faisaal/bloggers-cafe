import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Bloggers Cafe</h1>
      <picture>
        <img src="/src/assets/images/profile.png" alt="User Profile Picture" />
      </picture>
    </header>
  );
};

export default Header;
