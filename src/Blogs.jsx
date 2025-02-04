import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
    setBlogs(storedBlogs);
  }, []);

  const deleteBlog = (index) => {
    const updatedBlogs = [...blogs];
    updatedBlogs.splice(index, 1);
    localStorage.setItem("blogs", JSON.stringify(updatedBlogs));
    setBlogs(updatedBlogs);
  };

  return (
    <div 
        className="h-screen mt-20 py-25 w-full p-8 rounded-4xl bg-cover bg-center"
      style={{ backgroundImage: "url('public/homebg.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-white mb-10">
        Latest Blogs
      </h1>
      <div className="grid md:grid-cols-3 gap-8">
        {blogs.map((blog, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {blog.title}
            </h3>
            <p className="text-gray-600 truncate">{blog.description}</p>
            <div className="flex justify-between items-center mt-4 text-gray-600 text-md">
              <p className="font-semibold">By {blog.author}</p>
              <div className="flex items-center space-x-4">
    
                {blog.views !== undefined && (
                  <div className="flex items-center">
                    <img
                      src="/images/visibility.png"
                      className="h-5 w-5 mr-2"
                      alt="Views"
                    />
                    <span>{blog.views}</span>
                  </div>
                )}
                <button
                  className="p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => navigate(`/blogs/edit?id=${index}`)} // Updated route
                >
                  <img src="public/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" className="h-6 w-6" alt="Edit" />
                </button>
                <button
                  className="p-2 rounded-lg hover:bg-gray-200"
                  onClick={() => deleteBlog(index)}
                >
                  <img
                    src="public/delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                    className="h-6 w-6"
                    alt="Delete"
                  />
                </button>
              </div>
            </div>
          </div>
        ))}

        <div
          className="bg-white rounded-lg shadow-md flex items-center justify-center p-10 cursor-pointer"
          onClick={() => navigate("/blogs/create")}
        >
          <div className="flex items-center">
            <img
              className="w-10 h-10 mr-4"
              src="public/Plus-Symbol-Transparent-Images.png"
              alt="Create"
            />
            <h3 className="text-xl font-semibold text-gray-800">
              Create New Blog
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
