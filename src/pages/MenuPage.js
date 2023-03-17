import Jumbotron from "../components/Jumbotron";
import Menu from "../components/MenuPage/Menu";
import imgPlatillos from "../assets/img/platillosVarios.jpg";

function MenuPage() {
  return (
    <main>
      <Jumbotron img={imgPlatillos} />
      <Menu />
    </main>
  );
}

export default MenuPage;
