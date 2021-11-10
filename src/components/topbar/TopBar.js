import "./topbar.css";

export default function TopBar() {
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
          <li className="topListItems">HOME</li>
          <li className="topListItems">ABOUT</li>
          <li className="topListItems">CONTACT</li>
          <li className="topListItems">WRITE</li>
          <li className="topListItems">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImage"
          src="https://miro.medium.com/max/600/1*PiHoomzwh9Plr9_GA26JcA.png"
          alt=""
        />
        <i className="topSearch fas fa-search"></i>
      </div>
    </div>
  );
}
