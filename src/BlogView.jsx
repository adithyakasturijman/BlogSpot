import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BlogView = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const blogIndex = queryParams.get("id");

    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const storedBlogs = JSON.parse(localStorage.getItem("blogs")) || [];
        if (blogIndex !== null && storedBlogs[blogIndex]) {
            const updatedBlogs = [...storedBlogs];
            updatedBlogs[blogIndex].views = (updatedBlogs[blogIndex].views || 0) + 1;
            localStorage.setItem("blogs", JSON.stringify(updatedBlogs));

            setBlog(updatedBlogs[blogIndex]);
        }
    }, [blogIndex]);

    if (!blog) {
        return (
            <div className="h-screen flex items-center justify-center text-xl text-gray-600">
                Blog not found.
            </div>
        );
    }

    return (
        <div
            className="h-auto mt-10 py-10 w-full items-center p-8 rounded-4xl bg-cover bg-center shadow-amber-950 shadow-2xl relative"
            style={{ backgroundImage: "url('/homebg.jpg')" }}
        >

            <div className="relative w-full h-auto bg-gray-200 rounded-lg shadow-lg p-8">
                <button
                    className="text-blue-600 font-semibold mb-4 hover:text-blue-800 transition"
                    onClick={() => navigate(-1)}
                >
                    ← Back to Blogs
                </button>

                <h1 className="text-3xl font-bold text-gray-900">{blog.title}</h1>
                <p className="text-gray-700 mt-2">
                    By <span className="font-semibold">{blog.author}</span>
                </p>

                <div className="mt-2 flex items-center text-gray-600">
                    <img src="/visibility_24dp_000000_FILL0_wght400_GRAD0_opsz24.png" className="h-5 w-5 mr-2" alt="Views" />
                    <span>{blog.views} views</span>
                </div>

                {blog.image && (
                    <div className="flex justify-center mt-4 mb-4">
                        <img
                            src={blog.image}
                            alt={blog.title}
                            className="w-full md:max-w-4xl h-auto object-contain shadow-gray-800 shadow-xl rounded-lg"
                        />
                    </div>
                )}
                <div className="w-full md:max-w-5xl mx-auto">
                    <p className="text-lg text-gray-800 leading-relaxed mt-6 text-justify whitespace-pre-line px-4 py-4">
                        {blog.description}
                    </p>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                        onClick={() => navigate(`/blogs/edit?id=${blogIndex}`)}
                    >
                        Edit Blog
                    </button>
                </div>
            </div>
        </div>
    );
};

export default BlogView;
