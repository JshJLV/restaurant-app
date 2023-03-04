import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-neutral-700 w-full text-white flex flex-col justify-center items-center">
        <div >
          <h1>Siguenos en nuestras redes sociales</h1>
          <ul className="flex">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <p>
            Pagina realizada por <Link target={"_blank"} to={"https://github.com/JshJLV"}>Joseph</Link> para Ucamp</p>
        </div>
    </footer>
  )
}

export default Footer