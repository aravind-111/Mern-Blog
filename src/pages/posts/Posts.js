// import { Link } from "react-router-dom";
import Post from "../../components/post/Post";
import "./posts.css";

export default function Posts({ posts }) {
  console.log(posts);
  // const PF = "https://mern-blog-server-aravind.herokuapp.com/images/";
  return (
    <div className="posts">
      {posts.map((p) => (
        <Post key={p._id} post={p} />
      ))}
    </div>
  );
}
