import "./post.css";
import Posts from "../../pages/posts/Posts";
import { Link } from "react-router-dom";

export default function Post({ post }) {
  const PF = "https://mern-blog-server-aravind.herokuapp.com/images/";
  console.log(post);
  return (
    <div className="post" key={post._id}>
      {post.photo ? (
        <img src={PF + post.photo} alt="cat" />
      ) : (
        <div>
          <h2>Image not fond</h2>
        </div>
      )}

      <div className="post_info">
        <div className="post_categories">
          {post.categories.map((cate, index) => {
            return (
              <span key={index} className="post_cate">
                {cate}
              </span>
            );
          })}
        </div>
        <Link key={post._id} to={`/post/${post._id}`} className="link">
          <span className="post_title">{post.title}</span>
        </Link>
        <span className="time">{new Date(post.createdAt).toDateString()}</span>
      </div>
      <p className="post_desc">{post.desc}</p>
    </div>
  );
}
