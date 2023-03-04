import FormReservation from "./restaurants/FormReservation";
import MapView from "../components/MapView";

function RestaurantsPage() {
  return (
    <main className="container mx-auto flex flex-col xl:flex-row xl:flex-auto px-10 py-6">
      <FormReservation />
      <MapView />
    </main>
  );
}

export default RestaurantsPage;
