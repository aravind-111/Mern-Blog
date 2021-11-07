import Header from "../../Header/Header";
import "./home.css";
import Posts from "./posts/Posts";
import Sidebar from "./sidebar/Sidebar";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}
