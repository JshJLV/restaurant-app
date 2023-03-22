import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-neutral-700 w-full text-white flex flex-col justify-center items-center">
      <div className="pt-4">
        <h1>Siguenos en nuestras redes sociales</h1>
        <ul className="flex justify-center py-2 px-4 ">
          <li className="py-2 px-4 ">
            <Link to={"#"}>
              <FaFacebook className="w-8 h-8 hover:text-orange-600" />
            </Link>
          </li>
          <li className="py-2 px-4">
            <Link to={"#"}>
              <FaInstagram className="w-8 h-8 hover:text-orange-600" />
            </Link>
          </li>
          <li className="py-2 px-4">
            <Link to={"#"}>
              <FaTwitter className="w-8 h-8 hover:text-orange-600" />
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <p>
          Pagina realizada por
          <Link target={"_blank"} to={"https://github.com/JshJLV"}>
            <span className="hover:text-orange-600"> Jsh</span>
          </Link>{" "}
          para Ucamp
        </p>
      </div>
    </footer>
  );
}

export default Footer;
