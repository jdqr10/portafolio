import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="p-6 flex flex-col min-h-screen bg-prism">
      <div style={{ width: "100%" }} className="border-solid m-5 flex gap-4">
        {/* Columna izquierda */}
        <motion.div
          style={{ width: "30%", height: "700px" }}
          className="left bg-white rounded-2xl shadow-lg p-8 w-48"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold">Sobre mí</h1>
          <p className="mt-4 ">
            Soy desarrollador de software junior con formación académica y
            técnica sólida. Actualmente curso el cuarto semestre de Ingeniería
            de Software y cuento con un título técnico en Desarrollo de
            Software. Tengo experiencia práctica con lenguajes como Java,
            JavaScript y PHP, y con frameworks como Spring Boot, React, Angular
            y Laravel, además de conocimientos en MySQL, HTML y CSS. <br />  <br /> He
            participado en el desarrollo de aplicaciones web full-stack,
            contribuyendo tanto en el front-end como en el back-end, lo que me
            ha permitido comprender de forma integral el ciclo de vida del
            software. Me apasiona el aprendizaje continuo, el trabajo en equipo
            y el desarrollo de soluciones innovadoras y productivas que aporten
            valor a las organizaciones. <br /> <br /> Cuento con un nivel de inglés B2 y
            actualmente me preparo para alcanzar el nivel C1, lo que me permite
            colaborar eficazmente en entornos profesionales diversos y
            bilingües.
          </p>
        </motion.div>

        {/* Columna derecha */}
        <div style={{ width: "65%" }} className="right flex flex-col gap-4">
          {/* Sección Educación y Experiencia */}
          <motion.div
            className="above flex gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Educación */}
            <motion.div
              style={{ width: "50%" }}
              className="ab_left bg-white rounded-2xl shadow-lg p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-3xl font-bold">Educación</h2>
              <h3 className="text-xl mt-5 font-bold">Universidad EAM</h3>
              <p className="mt-2">Ingeniería de Software (5to semestre)</p>
              <p>(2025 - Actualidad)</p>

              <h3 className="text-xl mt-5 font-bold">
                Universidad del Quindío
              </h3>
              <p className="mt-2">Curso especializado de inglés</p>
              <p>(2022 - 2023)</p>

              <h3 className="text-xl mt-5 font-bold">SENA</h3>
              <p className="mt-2">
                Tecnólogo en Análisis y Desarrollo de Software
              </p>
              <p>(2022 - 2024)</p>
            </motion.div>

            {/* Experiencia */}
            <motion.div
              style={{ width: "50%" }}
              className="ab_right bg-white rounded-2xl shadow-lg p-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-3xl font-bold">Experiencia</h2>
              <h3 className="text-xl mt-5 font-bold">
                Software Full-Stack Junior Developer
              </h3>
              <h3 className="font-bold">Happy Sleep (Abr/2024 - Oct/2024)</h3>

              <div className="flex flex-row align-items-center gap-4 justify-center">
                <div className="flex flex-row items-center gap-4 justify-center">
                  <div className="pl-3">
                    <br />
                    <ul className="list-disc list-outside">
                      <li>
                        Mejoré los procesos internos mediante soluciones de TI
                      </li>
                      <br />
                      <li>
                        Desarrollé proyectos para la gestión de HH. y el control
                        de transporte
                      </li>
                      <br />
                      <li>
                        Brindé soporte tanto para aplicaciones nuevas como
                        existentes
                      </li>
                    </ul>
                  </div>
                </div>

                <motion.img
                  src="/sleep.png"
                  className="w-40 h-40 rounded-full"
                  whileHover={{ scale: 1.1, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 200 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Redes Sociales */}
          <motion.div
            className="under bg-white rounded-2xl shadow-lg p-8 flex justify-center items-center flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold">Redes Sociales</h2>
            <div className="social mt-4 flex justify-around w-full gap-8">
              {/* LinkedIn */}
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a href="https://www.linkedin.com/in/jer%C3%B3nimo-duque-756140327">
                  <img
                    src="/linkedin.webp"
                    className="w-32 h-32 rounded-full"
                  />
                </a>
                <span>LinkedIn</span>
              </motion.div>

              <div>
                <hr
                  style={{ border: "solid 1px", height: "100%" }}
                  className="mt-4 bg-gray-800"
                />
              </div>

              {/* GitHub */}
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a href="https://github.com/jdqr10">
                  <img src="/git.png" className="w-26 h-26 rounded-full" />
                </a>
                <span className="mt-4">GitHub</span>
              </motion.div>

              <div>
                <hr
                  style={{ border: "solid 1px", height: "100%" }}
                  className="mt-4 bg-gray-800"
                />
              </div>

              {/* Instagram */}
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <a href="https://www.instagram.com/jdq_10">
                  <img src="/ig.webp" className="w-30 h-30 rounded-full" />
                </a>
                <span>Instagram</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
