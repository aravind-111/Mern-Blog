import "./topbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  console.log(user.user);

  // handle logout
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); //it wil return user,isfetching,error states
    user.user || window.location.replace("/login");
  };

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
          <Link to="/write" className="link">
            <li className="topListItems">WRITE</li>
          </Link>
          <li className="topListItems" onClick={handleLogout}>
            {user.user && "LOGOUT"}
          </li>
        </ul>
      </div>
      {user.user ? (
        <div className="topRight">
          <img
            className="topImage"
            src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
            alt=""
          />
          <p> &nbsp;{user.user.userName}</p>
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
