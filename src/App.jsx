import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About"; 
import { Proyects } from "./pages/Proyects";

function Home() {
  return (
    <main className="flex-grow flex flex-col items-center justify-center bg-prism p-6">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <img
          src="/img_hv.jpeg"
          alt="Foto de perfil"
          className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-500"
        />
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          Jerónimo Duque Rincón
        </h1>
        <p className="text-gray-600 mb-6">
          Desarrollador de software con experiencia en React, Java y Spring Boot entre otras tecnologias.
          Apasionado por crear soluciones modernas y funcionales.
        </p>
        <a
          href="/Resume_JD.pdf"
          download
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-200"
        >
          📄 Descargar HV
        </a>
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-mi" element={<About />} />
          <Route path="/proyectos" element={<Proyects />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
