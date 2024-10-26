import { Typography } from "@material-tailwind/react";
import Logo from "../../img/Syncwave-logo.svg";
import { Link } from "react-router-dom"; // Importa Link desde react-router-dom

export default function Footer() {
  return (
    <footer className="w-full bg-white p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
        <img src={Logo} alt="logo-ct" className="w-10" />
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as={Link}
              to="#about"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Sobre Nosotros
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="#features"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Características
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="#technology"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Tecnología
            </Typography>
          </li>
          <li>
            <Typography
              as={Link}
              to="#contact"
              color="blue-gray"
              className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contacto
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2024 Syncwave. Todos los derechos reservados.
      </Typography>
    </footer>
  );
}
