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
      image: blog.image, // You can handle image uploads here as needed
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

  return (
    <div className="w-full max-w-md mx-auto mt-12 bg-white p-6 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-6">{isEdit ? "Edit Blog" : "Create New Blog"}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="title" className="block text-lg font-medium">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={blog.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="description" className="block text-lg font-medium">Description</label>
          <textarea
            id="description"
            name="description"
            value={blog.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="author" className="block text-lg font-medium">Author</label>
          <input
            type="text"
            id="author"
            name="author"
            value={blog.author}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="image" className="block text-lg font-medium">Image</label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={(e) => setBlog({ ...blog, image: e.target.files[0] })}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4 flex justify-between">
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg">
            {isEdit ? "Update Blog" : "Create Blog"}
          </button>
          <button
            type="button"
            onClick={() => navigate("/blogs")}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateOrEditBlog;
