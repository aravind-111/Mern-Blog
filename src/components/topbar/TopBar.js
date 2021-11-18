import "./topbar.css";
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topLeft">
        <i className="topIcons fab fa-facebook-square"></i>
        <i className="topIcons fab fa-twitter-square"></i>
        <i className="topIcons fab fa-pinterest-square"></i>
        <i className="topIcons fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link to="/" className="link">
            <li className="topListItems">HOME</li>
          </Link>
          <li className="topListItems">ABOUT</li>
          <li className="topListItems">CONTACT</li>
          <Link to="/write" className="link">
            <li className="topListItems">WRITE</li>
          </Link>
          <li className="topListItems">LOGOUT</li>
        </ul>
      </div>
      {user ? (
        <div className="topRight">
          <img
            className="topImage"
            src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
            alt=""
          />
          <i className="topSearch fas fa-search"></i>
        </div>
      ) : (
        <ul className="topList">
          <li className="topListItem">
            <Link to="/login" className="link">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/register" className="link">
              REGISTER
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}
