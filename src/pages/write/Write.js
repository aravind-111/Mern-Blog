import AddIcon from "@mui/icons-material/Add";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../../context/Context";
import "./write.css";

function Write() {
  // states
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);

  const { user } = useContext(Context);

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("in post submit");

    // new post
    const newPost = {
      userName: user.user.userName,
      title,
      desc,
    };
    console.log(newPost);
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;

      try {
        const res = await axios.post(
          "https://mern-blog-server-aravind.herokuapp.com/upload",
          data
        );
        console.log(newPost);
      } catch (error) {
        console.log("error in image:", error);
      }
    }
    try {
      const res = await axios.post(
        `https://mern-blog-server-aravind.herokuapp.com/post/${user.user._id}`,
        newPost
      );
      console.log(res);
      // console.log(res.data);
      window.location.replace(`post/${res.data.post._id}`);
    } catch (error) {
      console.log("error in new post", error);
    }
  };
  return (
    <div className="write">
      {file ? (
        <img src={URL.createObjectURL(file)} alt="" className="writeImg" />
      ) : (
        <div className="dummy_img">
          <label className="add_icon" htmlFor="fileInput">
            <AddIcon />
          </label>
          <input
            type="file"
            className="fileDisplay"
            id="fileInput"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <h1 className="dummy_text"> Click Here to select the pic</h1>
        </div>
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
          />
        </div>
        <div>
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}

export default Write;
