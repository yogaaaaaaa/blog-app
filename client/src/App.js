// import logo from './logo.svg';
import Topbar from "./components/topbar/Topbar.jsx";
import Home from "./pages/home/Home.jsx";
import Single from "./pages/single/Single.jsx";
import Write from "./pages/write/Write.jsx";
import Settings from "./pages/settings/Settings.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SinglePost from "./components/singlePost/SinglePost.jsx";

function App() {
  const user = false ;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user?<Write />:<Register/>} />
        <Route path="/settings" element={user?<Settings />:<Register/>} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </Router>
  );
}

export default App;
