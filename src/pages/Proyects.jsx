import { useState } from "react";

export function Proyects() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-6 flex flex-col min-h-screen bg-prism">
      <div className="mt-3 flex justify-center items-center">
        <h1 className="text-4xl font-bold text-white center">Mis Proyectos</h1>
      </div>

      <div className="proyects p-8">
        {/* Tarjeta que abre el modal */}
        <div
          className="prov bg-white rounded-2xl shadow-lg w-85 hover:scale-110 transition-transform duration-300 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <div className="img bg-img w-full h-50 rounded-t-2xl bg-cover bg-center"></div>
          <div className="inf p-5">
            <h2 className="text-2xl font-bold">Proveerten</h2>
            <a
              href="https://proveerten.netlify.app/"
              className="mt-2 text-blue-500 hover:underline"
            >
              Ver proyecto
            </a>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 element bg-opacity-30 flex justify-center items-center z-50 ">
          <div className="bg-white p-8 rounded-lg shadow-lg w-200 h-160 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              ✕
            </button>
            <div className="DIV p-4">
              <h2 className="text-2xl font-bold">¿Qué es Proveerten?</h2>
              <p className="mt-2">
                Prooverten es una plataforma digital diseñada para optimizar la
                relación comercial entre proveedores y tenderos, enfocada
                principalmente en microempresas y emprendedores. El objetivo es
                que los tenderos puedan encontrar fácilmente proveedores con los
                mejores precios y condiciones, mientras que los proveedores pueden
                llegar a más clientes sin invertir tiempo ni recursos en visitas
                presenciales.
              </p>
              <a
              href="https://proveerten.netlify.app/"
              className="mt-2 text-blue-500 hover:underline"
            >
              Ver proyecto
            </a>
              <div className="div m-4">
                <img
                    src="/prooverten.png"
                  />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
