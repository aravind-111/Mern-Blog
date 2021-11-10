import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../posts/Posts";
import "./home.css";

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
