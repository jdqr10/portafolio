function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 fixed bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Mi Portafolio. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
