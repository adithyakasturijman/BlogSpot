import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import NavBar from "./NavBar";
import CreateOrEditBlog from "./CreateOrEditBlog";
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/create" element={<CreateOrEditBlog />} />
      </Routes>
    </>
  );
}

export default App;
