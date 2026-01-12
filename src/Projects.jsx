import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Projects() {
  return (
    <div className="min-h-screen bg-white animate-fadeIn">
      <style>{`
        html { scroll-behavior: smooth; }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-in-out;
        }
        a, button {
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Header */}
      <header className="sticky top-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-5 flex items-center">
          <a href="/" className="text-black font-semibold text-sm tracking-tight hover:text-orange-400">Palwai KomalKumar Reddy</a>

          <div className="flex items-center gap-1 mx-auto bg-gray-100/80 rounded-full px-2 py-1.5 shadow-sm border border-gray-200/50">
            <a href="/about" className="px-5 py-2 rounded-full bg-transparent text-black hover:text-orange-400 text-sm font-medium">About</a>
            <a href="/projects" className="px-5 py-2 rounded-full bg-transparent text-black hover:text-orange-400 text-sm font-medium">Projects</a>
            <a href="/#contact" className="px-5 py-2 rounded-full bg-transparent text-black hover:text-orange-400 text-sm font-medium">Contact</a>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <a href="https://github.com/komalkumarpalwai" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 hover:scale-110 transition-all duration-200"><FaGithub size={20} /></a>
            <a href="https://www.linkedin.com/in/palwai-komal-kumar-reddy/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 hover:scale-110 transition-all duration-200"><FaLinkedin size={20} /></a>
          </div>
        </nav>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-12">Projects</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="h-40 bg-gray-100 rounded-md mb-4 flex items-center justify-center overflow-hidden"> 
              <img src="/project-1.png" alt="Max Solutions" className="w-full h-full object-contain" />
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Max Solutions</h3>
            <p className="text-gray-600 text-sm mt-2">Realtime end-to-end testing platform with AI-powered insights — dashboard, test management, results tracking, roadmap, and profile management with live collaboration.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded">React.js</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Node.js</span>
              <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
              <span className="px-2 py-1 bg-gray-100 rounded">OpenAI API</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Tailwind CSS</span>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="https://maxsolutionsv2.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-orange-500 text-white text-sm">Live</a>
              <a href="https://github.com/komalkumarpalwai/maxx-solutions-2.1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-gray-200 text-sm">Code</a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <a href="https://www.knowvity.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://www.codemindswebservices.com/assets/knowvity-BB_mE5pE.png" alt="Knowvity screenshot" className="w-full h-40 object-cover rounded-md" />
            </a>
            <h3 className="font-semibold text-lg text-gray-800 mt-4">
              <a href="https://www.knowvity.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-orange-400">Knowvity</a>
            </h3>
            <p className="text-gray-600 text-sm mt-2">Course platform for delivering online learning content, including user authentication, course management, video lessons, and assessments.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded">React</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Node.js</span>
              <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="https://www.knowvity.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-orange-500 text-white text-sm">Live</a>
              <a href="https://github.com/komalkumarpalwai/Knowvity.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-gray-200 text-sm">Code</a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <a href="https://www.codemindswebservices.com/" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://www.codemindswebservices.com/assets/logo-CECrDrnc.png" alt="Codeminds logo" className="w-full h-40 object-contain rounded-md bg-white p-4" />
            </a>
            <h3 className="font-semibold text-lg text-gray-800 mt-4">
              <a href="https://www.codemindswebservices.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-orange-400">Codeminds Web Services</a>
            </h3>
            <p className="text-gray-600 text-sm mt-2">Company website to showcase products and services, integrated chatbot for customer support, and implemented product pages and contact flows.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded">React</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Node.js</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Express</span>
              <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="https://www.codemindswebservices.com/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-orange-500 text-white text-sm">Live</a>
              <a href="https://github.com/komalkumarpalwai/codemindsweb" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-gray-200 text-sm">Code</a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <a href="https://true-bill1.onrender.com/home" target="_blank" rel="noopener noreferrer" className="block">
              <img src="https://cdn.aptoide.com/imgs/2/c/9/2c9171d13bc8727718459412f062891d_fgraphic.png" alt="True Bill screenshot" className="w-full h-40 object-cover rounded-md" />
            </a>
            <h3 className="font-semibold text-lg text-gray-800 mt-4">
              <a href="https://true-bill1.onrender.com/home" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-orange-400">True Bill Generator</a>
            </h3>
            <p className="text-gray-600 text-sm mt-2">Invoice generator with WhatsApp integration, full invoicing workflow, payment links, and exportable invoices.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded">React</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Node.js</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Express</span>
              <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
              <span className="px-2 py-1 bg-gray-100 rounded">WhatsApp</span>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="https://true-bill1.onrender.com/home" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded bg-orange-500 text-white text-sm">Live</a>
              <a href="https://github.com/komalkumarpalwai/true-bill1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-gray-200 text-sm">Code</a>
            </div>
          </div>
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-12">Academic Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="h-40 bg-gradient-to-br from-blue-400 to-blue-600 rounded-md mb-4 flex items-center justify-center text-white font-semibold text-lg">
              Loan Approval
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Loan Approval Management</h3>
            <p className="text-gray-600 text-sm mt-2">Machine learning-based system for predicting loan approvals using predictive analytics and data-driven decision making.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded">Python</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Machine Learning</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Data Analysis</span>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="https://github.com/saikrishnayadav711/loan-approval-prediction" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded border border-gray-200 text-sm">Code</a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="h-40 bg-gradient-to-br from-purple-400 to-purple-600 rounded-md mb-4 flex items-center justify-center text-white font-semibold text-lg">
              Neural Style
            </div>
            <h3 className="font-semibold text-lg text-gray-800">Neural Style Video Transfer</h3>
            <p className="text-gray-600 text-sm mt-2">Deep learning project applying neural style transfer to video frames, transforming video content with artistic styles.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded">Python</span>
              <span className="px-2 py-1 bg-gray-100 rounded">Deep Learning</span>
              <span className="px-2 py-1 bg-gray-100 rounded">OpenCV</span>
            </div>
            <div className="mt-4 flex gap-2">
              <a href="#" className="px-4 py-2 rounded border border-gray-200 text-sm text-gray-500 cursor-not-allowed">Code</a>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
            <div className="h-40 bg-gradient-to-br from-green-400 to-green-600 rounded-md mb-4 flex items-center justify-center text-white font-semibold text-lg">
              CongiAssit
            </div>
            <h3 className="font-semibold text-lg text-gray-800">CongiAssit</h3>
            <p className="text-gray-600 text-sm mt-2">AI-powered chatbot assistant with natural language processing capabilities for intelligent conversations and user support.</p>
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500 flex-wrap">
              <span className="px-2 py-1 bg-gray-100 rounded">Python</span>
              <span className="px-2 py-1 bg-gray-100 rounded">NLP</span>
              <span className="px-2 py-1 bg-gray-100 rounded">AI</span>
            </div>
            <div className="mt-4 flex gap-2">
              <span className="px-4 py-2 rounded bg-yellow-100 text-yellow-800 text-sm font-medium">Working on it</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-20 text-center">
        <a href="https://github.com/komalkumarpalwai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-800 hover:bg-orange-400 hover:text-white transition-all duration-200">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>View more on GitHub</span>
        </a>
      </section>

      <footer className="bg-orange-500 text-white py-4 text-center border-t border-orange-600">
        <p className="text-sm">&copy; 2026 KomalKumar Palwai. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Projects
