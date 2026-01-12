import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import { SiJavascript, SiPython, SiNodedotjs, SiReact, SiMongodb, SiUipath, SiSalesforce, SiDotnet, SiCplusplus, SiDjango, SiAmazonwebservices, SiLeetcode, SiGeeksforgeeks } from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'

function About() {
  const handleContactClick = (e) => {
    if (window.location.pathname !== '/') {
      window.location.href = '/#contact'
      return
    }
    e.preventDefault()
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
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
          {/* Logo */}
          <a href="/" className="text-black font-semibold text-sm tracking-tight hover:text-orange-400">
            Palwai KomalKumar Reddy
          </a>
          
          {/* Navigation - Centered */}
          <div className="flex items-center gap-1 mx-auto bg-gray-100/80 rounded-full px-2 py-1.5 shadow-sm border border-gray-200/50">
            <a href="/about" className="px-5 py-2 rounded-full bg-transparent text-black hover:text-orange-400 hover:shadow-sm transition-all duration-200 text-sm font-medium">
              About
            </a>
            <a href="/projects" className="px-5 py-2 rounded-full bg-transparent text-black hover:text-orange-400 hover:shadow-sm transition-all duration-200 text-sm font-medium">
              Projects
            </a>
            <a href="#contact" onClick={handleContactClick} className="px-5 py-2 rounded-full bg-transparent text-black hover:text-orange-400 hover:shadow-sm transition-all duration-200 text-sm font-medium">
              Contact
            </a>
          </div>
          
          {/* Social Icons - Far Right */}
          <div className="flex items-center gap-4 ml-auto">
            <a href="https://github.com/komalkumarpalwai" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 hover:scale-110 transition-all duration-200">
              <FaGithub size={20} />
            </a>
            <a href="https://www.linkedin.com/in/palwai-komal-kumar-reddy/" target="_blank" rel="noopener noreferrer" className="text-black hover:text-orange-400 hover:scale-110 transition-all duration-200">
              <FaLinkedin size={20} />
            </a>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        {/* About Hero - Two Column Layout */}
        <section className="max-w-6xl mx-auto mb-20">
          <div className="grid grid-cols-1 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Who <span className="text-orange-500">I Am</span>
              </h1>
              
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                I'm <span className="font-semibold text-gray-800">Palwai KomalKumar Reddy</span>, a final-year CSE (Data Science) student with a passion for building scalable web applications and transforming data into actionable insights.
              </p>
              
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                Currently, I'm an intern at Codeminds Web Services, where I'm gaining hands-on experience in full-stack development and Salesforce administration. I collaborate with experienced developers to build real-world applications and deliver impactful solutions.
              </p>
              
              <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                My academic and project experience includes data analytics, where I've worked on extracting insights from complex datasets and building meaningful visualizations. I specialize in end-to-end applications with robust backend systems using Node.js, Django, and Python, combined with responsive frontend interfaces built with React.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                I believe in continuous learning and staying updated with the latest technologies. My journey in tech is driven by curiosity and a passion for solving complex problems through elegant code.
              </p>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="max-w-6xl mx-auto mb-20 text-center">
          <h2 className="text-3xl font-bold text-black mb-8">Connect With Me</h2>
          
          <div className="flex justify-center items-center gap-8 flex-wrap">
            <a href="https://github.com/komalkumarpalwai" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-800 hover:text-orange-400 transition-all duration-200">
              <FaGithub size={32} />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            
            <a href="https://www.linkedin.com/in/palwai-komal-kumar-reddy/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-800 hover:text-orange-400 transition-all duration-200">
              <FaLinkedin size={32} />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
            
            <a href="https://leetcode.com/u/komalreddypalwai/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-800 hover:text-orange-400 transition-all duration-200">
              <SiLeetcode size={32} />
              <span className="text-sm font-medium">LeetCode</span>
            </a>
            
            <a href="https://www.geeksforgeeks.org/profile/komalredd0x50" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 text-gray-800 hover:text-orange-400 transition-all duration-200">
              <SiGeeksforgeeks size={32} />
              <span className="text-sm font-medium">GeeksforGeeks</span>
            </a>
          </div>
        </section>

        {/* What I Do - Skills Section */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">What I Do</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Frontend */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Frontend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React.js — Component-based architecture & state management</li>
                <li>• JavaScript — Modern ES6+ and async programming</li>
                <li>• Responsive Design — Mobile-first approach with Tailwind CSS</li>
                <li>• UI/UX — Creating intuitive user interfaces</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Backend Development</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Node.js &amp; Express — RESTful API development</li>
                <li>• Django &amp; Python — Web frameworks &amp; automation</li>
                <li>• Database Design — MongoDB, PostgreSQL, MySQL</li>
                <li>• Authentication &amp; Security — JWT, encryption</li>
              </ul>
            </div>

            {/* Data &amp; Cloud */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Data &amp; Analytics</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SQL — Complex queries &amp; database optimization</li>
                <li>• PowerBI — Data visualization &amp; dashboards</li>
                <li>• Data Analysis — Extracting insights from raw data</li>
                <li>• Python — Data manipulation &amp; scripting</li>
              </ul>
            </div>

            {/* Other */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Other Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• AWS — Cloud deployment &amp; services</li>
                <li>• C++ — System programming</li>
                <li>• UiPath — Process automation</li>
                <li>• Version Control — Git &amp; GitHub</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="max-w-6xl mx-auto mb-20">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">My Tech Stack</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {/* Python */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiPython className="text-blue-500" size={40} />
              <span className="text-gray-800 font-medium text-sm">Python</span>
            </div>

            {/* SQL */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <DiMsqlServer className="text-green-600" size={40} />
              <span className="text-gray-800 font-medium text-sm">SQL</span>
            </div>

            {/* Django */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiDjango className="text-green-700" size={40} />
              <span className="text-gray-800 font-medium text-sm">Django</span>
            </div>

            {/* JavaScript */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiJavascript className="text-yellow-400" size={40} />
              <span className="text-gray-800 font-medium text-sm">JavaScript</span>
            </div>

            {/* C++ */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiCplusplus className="text-blue-600" size={40} />
              <span className="text-gray-800 font-medium text-sm">C++</span>
            </div>

            {/* Node.js */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiNodedotjs className="text-green-600" size={40} />
              <span className="text-gray-800 font-medium text-sm">Node.js</span>
            </div>

            {/* React.js */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiReact className="text-blue-400" size={40} />
              <span className="text-gray-800 font-medium text-sm">React.js</span>
            </div>

            {/* MongoDB */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiMongodb className="text-green-600" size={40} />
              <span className="text-gray-800 font-medium text-sm">MongoDB</span>
            </div>

            {/* AWS */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiAmazonwebservices className="text-orange-500" size={40} />
              <span className="text-gray-800 font-medium text-sm">AWS</span>
            </div>

            {/* PowerBI */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiUipath className="text-orange-500" size={40} />
              <span className="text-gray-800 font-medium text-sm">UiPath</span>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-3xl font-bold text-black mb-6">Let's Connect</h2>
          <p className="text-gray-600 text-lg mb-8">Interested in collaborating or learning more about my work?</p>
          
          <div className="flex gap-5 flex-wrap justify-center">
            <a href="/#contact" className="px-8 py-3.5 rounded-lg border-2 border-orange-500 bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-200 text-base">
              Get in Touch
            </a>
            <a href="https://github.com/komalkumarpalwai" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg bg-gray-100 text-gray-800 font-semibold hover:bg-orange-400 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 text-base">
              <FaGithub size={16} />
              View My GitHub
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-orange-500 text-white py-4 text-center border-t border-orange-600">
        <p className="text-sm">&copy; 2026 KomalKumar Palwai. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default About
