import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blogs from "./Blogs";
import NavBar from "./NavBar";
import CreateOrEditBlog from "./CreateOrEditBlog";
import BlogView from "./BlogView";
import About from "./About";
import Contact from "./Contact";
import "./App.css"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/blogs/view" element={<BlogView />} />
        <Route path="/blogs/create" element={<CreateOrEditBlog />} />
        <Route path="/blogs/edit" element={<CreateOrEditBlog />} />
        <Route path="/blogs/view" element={<BlogView />} />
      </Routes>
    </>
  );
}

export default App;
