import { Link } from "react-router-dom";
import user from "../../images/user-photo.png";
import "./Header.scss";
const Header = () => {
  return (
    <div className="header">
      <Link to="/Movie-Database-Application">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={user} alt="userPhoto" />
      </div>
    </div>
  );
};

export default Header;
