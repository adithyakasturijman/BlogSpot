const About = () => {
    return (
        <div className="h-screen bg-cover bg-center mt-15 " style={{ backgroundImage: "url('/homebg.jpg')" }}>
            <div className="text-center text-white px-6 py-15 max-w-6xl mx-auto">
                    <div className=" py-4">
                    <h1 className="text-4xl font-bold mb-6 font-mono">About Us</h1>
                    <p className="text-xl mb-6 font-mono">
                        Welcome to our platform! We are a passionate team dedicated to bringing you the best content and experiences. 
                        Our mission is to share valuable knowledge, inspire creativity, and foster a community of like-minded individuals. 
                        Whether you're here to explore our blog, connect with others, or learn something new, we're excited to have you on this journey with us.
                    </p>
                    </div>
                    
                    <div className=" py-4">
                    <h1 className="text-4xl font-bold mb-6 font-mono">Our Mission</h1>
                    <p className="text-xl mb-6 font-mono">
                        Our mission is to create a space where ideas can thrive, and individuals can share their stories. We believe in 
                        the power of information and its ability to shape a better future. From educational resources to inspiring stories, 
                        we are committed to providing content that resonates with our audience and drives positive change.
                    </p>
                    </div>

                    <div className=" py-4">
                    <h1 className="text-4xl font-bold mb-6 font-mono">People</h1>
                    <p className="text-xl mb-6 font-mono">
                    We are a diverse group of thinkers, creators, and innovators. Our team consists of experts in various fields, 
                        each bringing their unique perspective and passion to the table. Together, we work toward a common goal — 
                        delivering high-quality content that makes a difference. 
                    </p>
                    </div>

                </div>
        </div>
    );
};

export default About;
