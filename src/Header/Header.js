import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitle">
        <span className="headerSmall">React & Node</span>
        <span className="headerLarge">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2014/11/28/13/55/autumn-548886_960_720.jpg"
        alt=""
      />
    </div>
  );
}
