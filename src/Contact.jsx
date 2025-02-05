const Contact = () => {
    return (
      <div
        className="min-h-screen w-full flex items-center justify-center bg-cover bg-center font-mono"
        style={{ backgroundImage: "url('/homebg.jpg')" }}
      >
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              If you have any questions or need further information, feel free to reach out to us.
            </p>
  
            <div className="flex items-center">
              <img
                src="/call_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                alt="Phone"
                className="h-6 w-6 mr-3"
              />
              <span>+1 (234) 567-890</span>
            </div>
  
            <div className="flex items-center">
              <img
                src="/mail_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                alt="Email"
                className="h-6 w-6 mr-3"
              />
              <span>contact@ourcompany.com</span>
            </div>
  
            <div className="flex items-center">
              <img
                src="/alternate_email_24dp_000000_FILL0_wght400_GRAD0_opsz24.png"
                alt="Location"
                className="h-6 w-6 mr-3"
              />
              <span>123 Business St, City, Country</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  