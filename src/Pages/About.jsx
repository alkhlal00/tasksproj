import { downloadcv } from "../script";

export function About() {
    return (
      <section className="flex justify-center items-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
        <div className="max-w-4xl w-full p-8 text-center">
          <h3 className="text-5xl font-extrabold mb-2 text-gray-900 dark:text-white">About Me</h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-10">
            I'm Abderrazaq Moustaoui, a passionate full-stack developer with a knack for building efficient, user-friendly web applications. I love solving real-world problems with clean and creative solutions.
          </p>
  
          <div className="flex flex-col md:flex-row items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden">
            <img
              src="profil.jpg"
              alt="Abderrazaq Moustaoui"
              className="w-full md:w-1/2 object-cover md:rounded-l-2xl"
            />
            <div className="p-6 text-left space-y-4 w-full">
              <h5 className="text-2xl font-bold text-gray-900 dark:text-white">
                Developer • Problem Solver • Innovator
              </h5>
              <p className="text-gray-700 dark:text-gray-400">
                With a background in full-stack development and experience leading real-world projects, I strive to create web solutions that are both beautiful and functional. I'm always eager to collaborate and grow.
              </p>
              <div className="flex ml-[-10px] lg:ml-0 flex-col text-center">
                <a
                  href="https://www.linkedin.com/in/abderrazaq-moustaoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-2 m-1 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
                >
                  LinkedIn Profile
                </a>
  
                <a
                  href="https://wa.me/212713119767"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 m-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Chat on WhatsApp
                </a>
  
                <a
                  href="mailto:abderrazaqmoustaoui@outlook.com"
                  className="flex items-center gap-2 px-4 py-2 m-1 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Send an Email
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
