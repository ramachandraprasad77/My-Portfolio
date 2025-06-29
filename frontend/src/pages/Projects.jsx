function Projects() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-2">Email Sequencer App</h2>
          <p className="text-gray-700">
            A full-stack MERN application to visually create and schedule email
            sequences using React Flow, Agenda, and Nodemailer.
          </p>
          <a
            href="https://prasad-emailsequencer.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          >
            Goto
          </a>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-2">Healthcare App</h2>
          <p className="text-gray-700">
            A single-page "Healthcare Dashboard" using React-vite. Break down a
            complex UI into reusable React components.
          </p>
          <a
            href="https://fitpeo-healthcare.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          >
            Goto
          </a>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-2">Weather Forecast</h2>
          <p className="text-gray-700">
            🌦️ A sleek weather forecast app delivering real-time data including
            temperature, humidity, wind speed, and UV index for any location.
          </p>
          <a
            href="https://fitpeo-healthcare.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 transition"
          >
            Goto
          </a>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-2">Mini Blog App</h2>
          <p className="text-gray-700">
            A full-stack blog application built with MERN stack. Users can
            register, login, create posts, and comment.
          </p>
        </div>

        <div className="p-6 bg-white shadow rounded">
          <h2 className="text-2xl font-semibold mb-2">To-do List App</h2>
          <p className="text-gray-700">
            A clean and simple React app to manage daily tasks with add, edit,
            and delete features.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
