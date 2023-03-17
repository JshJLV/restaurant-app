import Jumbotron from "../components/Jumbotron";
// import ImgCostillas from "../assets/img/costillas.jpg"
import ImgCostillas from "../assets/img/costillas.jpg";
import HistorySection from "../components/homePage/HistorySection";
import FormContact from "../components/homePage/FormContact";

function HomePage() {
  return (
    <main>
      <Jumbotron img={ImgCostillas} />
      <HistorySection />
      <FormContact />
    </main>
  );
}

export default HomePage;
