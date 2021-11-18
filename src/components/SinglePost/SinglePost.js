import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./singlepost.css";

function SinglePost() {
  const [post, setPost] = useState({});
  const location = useLocation();
  const { user } = useContext(Context);
  console.log(user.user);

  //update states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [updatePost, setUpdatePost] = useState(false);

  const PF = "https://mern-blog-server-aravind.herokuapp.com/images/";

  // console.log(location.pathname.split("/")[2]);
  const postId = location.pathname.split("/")[2];

  //postId useEffect
  useEffect(() => {
    //getpost
    const getSinglePost = async () => {
      const res = await axios.get(
        `https://mern-blog-server-aravind.herokuapp.com/post/${postId}`
      );
      // console.log(res.data.details);
      setPost(res.data.post);
      setTitle(res.data.post.title);
      setDesc(res.data.post.desc);
    };
    getSinglePost();
  }, [postId]);

  //delete post
  const handleDelete = async () => {
    try {
      // console.log("delete in process");
      // console.log("post Id", postId);
      const res = await axios.delete(
        `https://mern-blog-server-aravind.herokuapp.com/post/${post._id}`,
        {
          data: { userName: post.userName },
        }
      );
      console.log(res.data);
      window.location.replace("/");
    } catch (error) {
      console.log(error);
    }
  };

  //update post
  const handleUpdate = async () => {
    try {
      await axios.put(
        `https://mern-blog-server-aravind.herokuapp.com/post/${post._id}`,
        {
          userName: post.userName,
          title,
          desc,
        }
      );
      setUpdatePost(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo ? (
          <img src={PF + post.photo} alt="" className="singlePostImg" />
        ) : (
          <div>
            <h4>Image not available</h4>
          </div>
        )}

        {updatePost ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            className="singlePostTitle border"
          />
        ) : (
          <h1 className="singlePostTitle">
            {title}
            {user.user && user.user.userName === post.userName && (
              <div className="singlePostEdit">
                <Edit
                  className="buttons"
                  color="primary"
                  onClick={() => setUpdatePost(true)}
                />
                <Delete
                  className="buttons"
                  style={{ color: "tomato" }}
                  onClick={handleDelete}
                />
              </div>
            )}
          </h1>
        )}

        <div className="singlePostInfo">
          <span className="author">
            Author:
            <Link className="link" to={`/?user=${post.userName}`}>
              <b>{post.userName}</b>
            </Link>
          </span>
          <span className="date">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updatePost ? (
          <input
            type="text"
            className="singlePostDesc border"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
        )}
        {updatePost && (
          <button className="update" type="submit" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
