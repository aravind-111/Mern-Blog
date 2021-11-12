import { Link } from "react-router-dom";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        src="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postHead">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem iet, consectetur adipisicing elit. Assumenda officia architecto
        deserunt deleniti? asasLabore ipsum aspernatur magnam fugiat,
        reprehenderitasas praesentium blanditiis quos cupiditate ratione atque,
        exerciLorem ipsum dolor sit amet, consectetur adipisicing elit.
        Assumenda officia architecto deserunt deleniti? Labore ipsum aspernatur
        magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate
        ratione atque, exerci
      </p>
    </div>
  );
}
