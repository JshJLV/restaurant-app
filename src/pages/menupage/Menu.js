import CategoryTitle from "../../components/CategoryTitle";
import CardMenu from "../../components/CardMenu";
import ImgMenu from "../../components/ImgMenu";
import imgEnsalada from "../../assets/img/ensalada.jpg";
import imgBoneless from "../../assets/img/boneless.jpg";
import imgCarnePapas from "../../assets/img/carneYpapas.jpg";
import imgHamburguesa from "../../assets/img/hamburguesa.jpg";
import imgPastelChocolate from "../../assets/img/pastelChocolate.jpg";

function Menu() {
  return (
    <div className="px-8 py-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      <CategoryTitle categoria={"Ensaladas y entradas"} />
      <CardMenu platillo={"Ensalada Cesar"} precio={"$139"} />
      <ImgMenu img={imgEnsalada} alt={"Ensalada"} />
      <CardMenu platillo={"Ensalada con fajitas de pollo"} precio={"$159"} />
      <ImgMenu img={imgBoneless} alt={"Boneless, zanahoria y apio"} />
      <CardMenu platillo={"Sampler"} precio={"$159"} />
      <CardMenu platillo={"Nachos"} precio={"$149"} />
      <CategoryTitle categoria={"Carnes"} />
      <ImgMenu img={imgCarnePapas} alt={"Carne con papas a la francesa"} />
      <CardMenu platillo={"Arrachera"} precio={"$300"} />
      <CardMenu platillo={"Top Sirloin"} precio={"$350"} />
      <CardMenu platillo={"New york"} precio={"$350"} />
      <CardMenu platillo={"Tomahawk"} precio={"$1,199"} />
      <CategoryTitle categoria={"Hamburguesas y Pizzas"} />
      <ImgMenu
        img={imgHamburguesa}
        alt={"Hamburguesa con papas a la francesa"}
      />
      <CardMenu platillo={"Hamburguesas"} precio={"$149"} />
      <CardMenu platillo={"Pizzas"} precio={"$229"} />
      <CategoryTitle categoria={"Bebidas"} />
      <CardMenu platillo={"Refrescos"} precio={"$49"} />
      <CardMenu platillo={"Jarras de agua"} precio={"$129"} />
      <CardMenu platillo={"Cafe"} precio={"$49"} />
      <CardMenu platillo={"Cerveza"} precio={"$80"} />
      <CategoryTitle categoria={"Postres"} />
      <CardMenu platillo={"Rebanada de pastel de chocolate"} precio={"$60"} />
      <ImgMenu img={imgPastelChocolate} alt={"Pastel de chocolate"} />
      <CardMenu platillo={"Pie de limon"} precio={"$60"} />
      <CardMenu platillo={"Helado"} precio={"$50"} />
      <CardMenu platillo={"Pastel de helado"} precio={"$60"} />
    </div>
  );
}

export default Menu;
