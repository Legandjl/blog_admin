import "./App.css";

import { Routes, Route } from "react-router-dom";
import Home from "../home/Home";
import Header from "../header/Header";
import Post from "../post/Post";
import Footer from "../footer/Footer";
import PostForm from "../postForm/postForm";
import Login from "../login/Login";
import { UserContextProvider } from "../../context/UserContext";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";

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
            path={"/:num"}
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
        </Routes>
        <Footer />
      </UserContextProvider>
    </div>
  );
}

export default App;
