import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Context } from "./context/Context";
import { useContext } from "react";
import Write from "./pages/write/Write";
import Posts from "./pages/posts/Posts";
import Single from "./components/Single/Single";

function App() {
  const { user } = useContext(Context);
  return (
    <div>
      <BrowserRouter>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/write" element={<Write />} />
          <Route path="/post/:id" element={<Single />} />
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
