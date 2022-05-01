import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Post from "../post/Post";
import Footer from "../footer/Footer";
import PostForm from "../postForm/postForm";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/post/:id"} element={<Post />} />
        <Route path={"/new"} element={<PostForm />} />
        <Route path={"/edit/:id"} element={<PostForm />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
