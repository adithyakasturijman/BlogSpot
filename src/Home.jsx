import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();

    return (
      <div className="w-full min-h-screen flex flex-col items-center justify-center "
      style={{ backgroundImage: "url('/homebg.jpg')" }}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl">
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/home.jpg"
              alt="Blog Banner" 
              className="w-full max-w-[600px] h-auto object-cover rounded-3xl shadow-2xl shadow-black"
            />
          </div>

          <div className="w-full md:w-1/2 flex flex-col items-center text-center px-6 ">
            <h1 className="text-4xl font-bold text-white mb-4 font-mono">Welcome to BlogSpot</h1>
            <p className="text-lg text-white font-mono">
              Explore amazing articles, stories, and insights on various topics. 
              Stay inspired and keep learning!
            </p>
          </div>
        </div>

        <div className="mt-30">
          <button 
            className="text-white bg-gray-700 px-6 py-3 rounded-2xl hover:bg-gray-800 transition-all font-mono"
            onClick={() => navigate("/blogs")}
          >
            Start Blogging
          </button>
        </div>
      </div>
    );
};

export default Home;
