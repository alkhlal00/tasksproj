import { downloadcv } from "../script";

export function Contact() {
    return (
      <section className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-4xl w-full p-8 text-center">
          <h3 className="text-5xl font-extrabold mb-2 text-gray-900 dark:text-white">Contact</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            Get in touch — I'm always open to collaborations or just a friendly hello.
          </p>
  
          <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <img
              src="image_contact.jpg"
              alt="Contact Illustration"
              className="w-full md:w-1/2 object-cover md:rounded-l-2xl"
            />
            <div className="p-6 text-left space-y-4 w-full">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                Let’s work together!
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                Whether you have a project idea or just want to say hi, feel free to reach out.
              </p>
              <div className="flex flex-wrap ml-[-10px] lg:ml-0">
                <a
                  href="https://www.linkedin.com/in/abderrazaq-moustaoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 m-1  bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                >
                  Connect on LinkedIn
                </a>
  
                <a
                  href="https://wa.me/212713119767" // Replace with your WhatsApp number
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 pr-4  py-2 m-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.03 13.91c-.28-.14-1.65-.82-1.9-.91..." />
                  </svg>
                  WhatsApp Me
                </a>
  
                <a
                  href="mailto:abderrazaqmoustaoui@outlook.com"
                  className="flex items-center gap-2 px-4 py-2 m-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                >
                      
                  Email Me
                </a>
                <button onClick={downloadcv}
                                   
                                   className="flex items-center gap-2 px-4 py-2 m-1 bg-red-700 text-white rounded-lg hover:bg-red-800 transition"
                                 >
                 Download Resume                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  