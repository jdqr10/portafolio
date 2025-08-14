import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const linkClasses = (path) =>
    location.pathname === path
      ? "font-bold border-b-2 border-white"
      : "hover:underline";

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Mi Portafolio</h1>
        <nav className="text-white p-4 flex justify-center gap-6">
          <Link to="/" className={linkClasses("/")}>
            Inicio
          </Link>
          <Link to="/sobre-mi" className={linkClasses("/sobre-mi")}>
            Sobre mí
          </Link>
          <Link to="/proyectos" className={linkClasses("/proyectos")}>
            Mis Proyectos
          </Link>
        </nav>
      </div>
    </nav>
  );
}

export default Navbar;
