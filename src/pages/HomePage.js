import Jumbotron from "../components/Jumbotron";
// import ImgCostillas from "../assets/img/costillas.jpg"
import ImgCostillas from "../assets/img/costillas.jpg"
import HistorySection from "./homepage/HistorySection";
import FormContact from "./homepage/FormContact";

function HomePage() {
  return (
    <main>
      <Jumbotron img={ImgCostillas}/>
      <HistorySection />
      <FormContact />
    </main>
  );
}

export default HomePage;
