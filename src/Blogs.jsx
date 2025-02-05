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
      className="h-screen mt-20 py-10 w-full p-8 rounded-4xl bg-cover bg-center shadow-amber-950 shadow-2xl"
      style={{ backgroundImage: "url('/homebg.jpg')" }}
    >
      <h1 className="text-4xl font-bold text-white mb-10 font-mono">Latest Blogs</h1>
      

      <div className="flex flex-col gap-4">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg  p-6 cursor-pointer flex flex-wrap md:flex-nowrap items-center gap-6 shadow-black shadow-2xl"
            onClick={() => navigate(`/blogs/view?id=${index}`)}
          >
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 break-words text-left font-mono">
                {blog.title}
              </h3>
              <p className="text-gray-600 line-clamp-3 whitespace-normal break-words text-left font-sans">
                {blog.description}
              </p>
              <div className="mt-4 flex justify-between items-center text-gray-600 text-md font-mono">
                <p className="font-semibold">By {blog.author}</p>
                <div className="flex items-center space-x-4">
                  {blog.views !== undefined && (
                    <div className="flex items-center">
                      <img
                        src="/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                        className="h-5 w-5 mr-2"
                        alt="Views"
                      />
                      <span>{blog.views}</span>
                    </div>
                  )}
                  <button
                    className="p-2 rounded-lg hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/blogs/edit?id=${index}`);
                    }}
                  >
                    <img
                      src="/edit_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                      className="h-6 w-6"
                      alt="Edit"
                    />
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-gray-200"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteBlog(index);
                    }}
                  >
                    <img
                      src="/delete_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                      className="h-6 w-6"
                      alt="Delete"
                    />
                  </button>
                </div>
              </div>
            </div>

            {blog.image && (
              <div className="w-full md:w-80 h-auto flex-shrink-0 order-1 md:order-none">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-auto object-contain shadow-amber-50 shadow-xl rounded-lg"
                />
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-center mt-6">
          <div
            className="bg-white rounded-full w-40 h-6 shadow-black shadow-md flex items-center justify-center p-5 cursor-pointer hover:bg-amber-50 hover:h-10 transform ease-in-out"
            onClick={() => navigate("/blogs/create")}
          >
            <div className="flex items-center">
              <img
                className="w-5 h-5 mr-4"
                src="/Plus-Symbol-Transparent-Images.png"
                alt="Create"
              />
              <h3 className="text-md font-semibold text-gray-800 font-mono">New Blog</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
