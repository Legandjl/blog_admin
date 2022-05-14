import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "../home/homepage/Home";
import Header from "../header/Header";
import Post from "../post/Post";
import Footer from "../footer/Footer";
import PostForm from "../postForm/form/postForm";
import Login from "../login/Login";
import { UserContextProvider } from "../../context/UserContext";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
import NotFound from "../errors/NotFound";
import Oops from "../errors/Oops";
import Unauthorised from "../errors/Unauthorised";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <Header />
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/login"} element={<Login />} />
          <Route
            path={"/home"}
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/post/:id"}
            element={
              <ProtectedRoute>
                <Post />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/new"}
            element={
              <ProtectedRoute>
                <PostForm />
              </ProtectedRoute>
            }
          />
          <Route
            path={"/edit/:id"}
            element={
              <ProtectedRoute>
                <PostForm />
              </ProtectedRoute>
            }
          />
          <Route path="/unauthorised" element={<Unauthorised />} />
          <Route path="/oops" element={<Oops />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
