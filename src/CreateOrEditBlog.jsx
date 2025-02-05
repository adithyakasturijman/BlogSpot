import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const CreateOrEditBlog = () => {
  const [blog, setBlog] = useState({ title: "", description: "", author: "", image: "" });
  const [isEdit, setIsEdit] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const blogId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (blogId) {
      const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
      const blogToEdit = storedBlogs[blogId];
      if (blogToEdit) {
        setBlog(blogToEdit);
        setIsEdit(true);
      }
    }
  }, [blogId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedTitle = blog.title.trim();
    const updatedDescription = blog.description.trim();
    const updatedAuthor = blog.author.trim();

    if (updatedTitle === "" || updatedDescription === "" || updatedAuthor === "") {
      alert("All fields are required!");
      return;
    }

    const updatedBlog = {
      title: updatedTitle,
      description: updatedDescription,
      author: updatedAuthor,
      image: blog.image,
    };

    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    if (isEdit) {
      storedBlogs[blogId] = updatedBlog;
    } else {
      storedBlogs.push(updatedBlog);
    }

    localStorage.setItem("blogs", JSON.stringify(storedBlogs));
    navigate("/blogs");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog((prevBlog) => ({
      ...prevBlog,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setBlog((prevBlog) => ({ ...prevBlog, image: reader.result }));
      };
    }
  };

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/homebg.jpg')" }}
    >
      <div className="bg-gray-200 p-8 rounded-lg shadow-lg w-full max-w-3xl mt-20 min-h-[400px] ">
        <h2 className="text-2xl py-2 font-mono">
        {isEdit ? "Edit Blog" : "Add a New Blog"}
        </h2>
        <form onSubmit={handleSubmit} className="bg-gray-300 p-6 rounded-lg flex flex-col mt-2">
          <div className="mb-4">
            <label className="block text-gray-700 font-medium text-left py-2 font-mono">Blog Title</label>
            <input
              type="text"
              name="title"
              value={blog.title}
              onChange={handleChange}
              className="w-full border border-black rounded-md p-2 h-12"
              placeholder="Enter the title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium text-left py-2 font-mono">Blog Description</label>
            <textarea
              name="description"
              value={blog.description}
              onChange={handleChange}
              className="w-full border border-black rounded-md h-60 p-2"
              placeholder="Enter the description"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium text-left py-2 font-mono">Author Name</label>
            <input
              type="text"
              name="author"
              value={blog.author}
              onChange={handleChange}
              className="w-full border border-black rounded-md p-2 h-12"
              placeholder="Enter the author's name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium text-left py-2 font-mono">Upload Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="w-full border border-black rounded-md p-2"
              accept="image/*"
            />
          </div>
          {blog.image && (
            <div className="mb-4 flex justify-center">
              <img src={blog.image} alt="Blog" className="max-w-xs rounded-lg shadow-md" />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition font-mono"
          >
            {isEdit ? "Update Blog" : "Add Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateOrEditBlog