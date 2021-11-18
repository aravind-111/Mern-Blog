import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Posts from "../posts/Posts";
import "./home.css";

export default function Home() {
  const [posts, setPosts] = useState([]);
  // get post
  const fetchPosts = async () => {
    console.log("came in");
    try {
      console.log("res");
      const res = await axios.get(
        "https://mern-blog-server-aravind.herokuapp.com/post"
      );
      console.log(res.data.posts);
      setPosts(res.data.posts);
    } catch (err) {
      console.log(err.response);
    }
  };
  useEffect(() => {
    console.log("Posts mounted in home");
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="home">
        <Posts posts={posts} />
        <Sidebar />
      </div>
    </div>
  );
}
