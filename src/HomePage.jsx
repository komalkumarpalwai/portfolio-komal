import { FaGithub, FaLinkedin, FaDownload, FaChartBar, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'
import { SiJavascript, SiPython, SiNodedotjs, SiReact, SiMongodb, SiUipath, SiSalesforce, SiDotnet, SiCplusplus, SiDjango, SiAmazonwebservices } from 'react-icons/si'
import { DiMsqlServer } from 'react-icons/di'

function HomePage() {
  const handleContactClick = (e) => {
    if (window.location.pathname !== '/') {
      // navigate to homepage anchor if not already there
      window.location.href = '/#contact'
      return
    }
    // same-page smooth scroll
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

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-6 mt-20 leading-tight">
            I'm <span className="text-orange-500 bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">KomalKumar</span>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-gray-600 font-medium mb-8 tracking-wide">
            Software Engineer
          </h2>
          
          {/* Description */}
          <p className="text-gray-600 text-lg md:text-xl mb-12 leading-relaxed max-w-3xl mx-auto">
            As a Full Stack Developer and Data Analyst, I build end-to-end applications with robust backend systems and intuitive frontend interfaces. I transform complex data into actionable insights and create scalable solutions that drive business value through both technical excellence and data-driven decision making.
          </p>
          
          {/* Buttons */}
          <div className="flex gap-5 flex-wrap justify-center mb-20">
            <a href="/projects" className="px-8 py-3.5 rounded-lg border-2 border-orange-500 bg-white text-orange-500 font-semibold hover:bg-orange-500 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-200 text-base inline-flex items-center justify-center">
              View Projects
            </a>
            <a href="https://docs.google.com/document/d/1-yfNbRr_EFQ_LL0wLuCP1R_zz2KNKRoD/edit?usp=drive_link&ouid=116866251628238850062&rtpof=true&sd=true" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg bg-gray-100 text-gray-800 font-semibold hover:bg-orange-400 hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2 text-base">
              <FaDownload size={16} className="text-gray-800" />
              Download Resume
            </a>
          </div>
        </div>

        {/* Tech I Work With Section */}
        <div className="max-w-6xl mx-auto mt-32 mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
            Tech I Work With
          </h2>
          
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

            {/* PowerBI */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <FaChartBar className="text-yellow-500" size={40} />
              <span className="text-gray-800 font-medium text-sm">PowerBI</span>
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

            {/* UiPath */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiUipath className="text-orange-500" size={40} />
              <span className="text-gray-800 font-medium text-sm">UiPath</span>
            </div>

            {/* Salesforce */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiSalesforce className="text-blue-500" size={40} />
              <span className="text-gray-800 font-medium text-sm">Salesforce</span>
            </div>

            {/* .NET */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiDotnet className="text-purple-600" size={40} />
              <span className="text-gray-800 font-medium text-sm">.NET</span>
            </div>

            {/* AWS */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200 flex flex-col items-center justify-center gap-3">
              <SiAmazonwebservices className="text-orange-500" size={40} />
              <span className="text-gray-800 font-medium text-sm">AWS</span>
            </div>
          </div>
        </div>

        {/* Experience */}
        <section className="max-w-6xl mx-auto mt-12 mb-20 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 text-center">Experience</h2>

          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <a href="https://www.codemindswebservices.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-orange-500 hover:underline">Codeminds Web Services</a>
                <div className="text-gray-600 mt-1">Full Stack Developer — Feb 2025 — Sep 2025 (Internship)</div>
              </div>
              <div className="text-sm text-gray-500">Remote</div>
            </div>

            <p className="text-gray-600 mt-4">Worked as a Full Stack Developer during an internship building web applications, implementing REST APIs, and contributing to frontend interfaces. Collaborated with the engineering team to deliver features and improvements.</p>
          </div>
        </section>

        {/* Internship Projects */}
        <section id="internship-projects" className="max-w-6xl mx-auto mt-8 mb-40 px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8 text-center">Internship Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Knowvity (Project 1) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <a href="https://www.knowvity.com/" target="_blank" rel="noopener noreferrer" className="block">
                <img src="https://www.codemindswebservices.com/assets/knowvity-BB_mE5pE.png" alt="Knowvity screenshot" className="w-full h-40 object-cover rounded-md" />
              </a>
              <h3 className="font-semibold text-lg text-gray-800 mt-4">
                <a href="https://www.knowvity.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-orange-400">Knowvity</a>
              </h3>
              <p className="text-gray-600 text-sm mt-2">Created Knowvity — a course platform for delivering online learning content, including user authentication, course management, video lessons, and assessments.</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
              </div>
            </div>

            {/* Codeminds Web Services (Project 2) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <a href="https://www.codemindswebservices.com/" target="_blank" rel="noopener noreferrer" className="block">
                <img src="https://www.codemindswebservices.com/assets/logo-CECrDrnc.png" alt="Codeminds logo" className="w-full h-40 object-contain rounded-md bg-white p-4" />
              </a>
              <h3 className="font-semibold text-lg text-gray-800 mt-4">
                <a href="https://www.codemindswebservices.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-orange-400">Codeminds Web Services</a>
              </h3>
              <p className="text-gray-600 text-sm mt-2">Developed the company website to showcase products and services, integrated a chatbot for customer support, and implemented product pages and contact flows.</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Express</span>
                <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
              </div>
            </div>

            {/* True Bill Generator (Project 3) */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
              <a href="https://true-bill1.onrender.com/home" target="_blank" rel="noopener noreferrer" className="block">
                <img src="https://cdn.aptoide.com/imgs/2/c/9/2c9171d13bc8727718459412f062891d_fgraphic.png" alt="True Bill screenshot" className="w-full h-40 object-cover rounded-md" />
              </a>
              <h3 className="font-semibold text-lg text-gray-800 mt-4">
                <a href="https://true-bill1.onrender.com/home" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-orange-400">True Bill Generator</a>
              </h3>
              <p className="text-gray-600 text-sm mt-2">Invoice generator with WhatsApp integration, full invoicing workflow, payment links, and exportable invoices.</p>
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <span className="px-2 py-1 bg-gray-100 rounded">React</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Node.js</span>
                <span className="px-2 py-1 bg-gray-100 rounded">Express</span>
                <span className="px-2 py-1 bg-gray-100 rounded">MongoDB</span>
                <span className="px-2 py-1 bg-gray-100 rounded">WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <a href="https://github.com/komalkumarpalwai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-gray-200 bg-white text-gray-800 hover:bg-orange-400 hover:text-white transition-all duration-200">
              <FaGithub size={16} />
              <span>View more projects on GitHub</span>
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="max-w-6xl mx-auto mt-20 mb-20 px-6">
          <div className="bg-gradient-to-b from-gray-50 to-white rounded-2xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">Let's Work Together</h2>
            
            <p className="text-gray-600 text-lg mb-2">I'm always excited to collaborate, innovate, and build</p>
            <p className="text-gray-600 text-lg mb-4">meaningful solutions.</p>
            
            <p className="text-gray-600 text-lg mb-8">Whether you have a project, a job opportunity, or just want to<br />connect — send me an email below to work together!</p>
            
            <a href="mailto:komalreddypalwai@gmail.com" className="inline-flex items-center gap-2 text-2xl font-semibold text-orange-500 hover:text-orange-400 mb-12 transition-all duration-200">
              <FaEnvelope size={24} />
              komalreddypalwai@gmail.com
            </a>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16 mb-12">
              <div className="flex items-center justify-center gap-3">
                <FaMapMarkerAlt size={24} className="text-orange-500" />
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Location</div>
                  <div className="text-gray-600">Hyderabad, India</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center gap-3">
                <FaPhone size={24} className="text-orange-500" />
                <div className="text-left">
                  <div className="font-semibold text-gray-800">Phone</div>
                  <div className="text-gray-600">8309897937</div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center gap-6">
              <a href="https://www.linkedin.com/in/palwai-komal-kumar-reddy/" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-orange-400 transition-all duration-200">
                <FaLinkedin size={28} />
              </a>
              <a href="https://github.com/komalkumarpalwai" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-orange-400 transition-all duration-200">
                <FaGithub size={28} />
              </a>
            </div>
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

export default HomePage

