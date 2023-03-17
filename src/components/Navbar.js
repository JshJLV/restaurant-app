import { NavLink } from "react-router-dom";
import Logo from "../assets/img/restaurante-logo.png";

function Navbar() {
  return (
    <div className="w-full h-auto xl:h-20 flex flex-col xl:flex-row bg-neutral-700">
      <div className="flex flex-2 justify-center h-full">
        <img className="max-w-md" src={Logo} alt="Logo" />
      </div>
      <nav className="flex-1 text-white">
        <ul className="h-full flex flex-col items-center xl:flex-row xl:justify-end xl:pr-10">
          <li className="font-bold p-4 text-lg hover:text-red-500">
            <NavLink to={"/"}>Incio</NavLink>
          </li>
          <li className="font-bold p-4 text-lg hover:text-red-500">
            <NavLink to={"/menu"}>Menú</NavLink>
          </li>
          <li className="font-bold p-4 text-lg hover:text-red-500">
            <NavLink to={"/restaurantes"}>Sucursales</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
