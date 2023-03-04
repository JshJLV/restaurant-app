import Jumbotron from "../components/Jumbotron"
import Menu from "./menupage/Menu"
// import imgCazuelada from "../assets/img/cazuelada.jpg"
import imgPlatillos from "../assets/img/platillosVarios.jpg"


function MenuPage() {
  return (
    <main>
        <Jumbotron img={imgPlatillos}/>
        <Menu />
    </main>
  )
}

export default MenuPage