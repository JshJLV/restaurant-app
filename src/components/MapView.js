import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerLocation from "leaflet";
import IconLocation from "../assets/svg/location.svg";
import "leaflet/dist/leaflet.css";

const MapView = () => {
  const position = ["22.138110714322398", "-101.00058146877063"];

  const icon = MarkerLocation.icon({
    iconUrl: IconLocation,
    iconRetinaUrl: IconLocation,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
  });

  return (
    <div className="w-full h-96 mt-3 p-2 xl:mt-0 xl:top-0 xl:w-3/4 xl:h-auto xl:px-3">
      <MapContainer center={position} zoom="15">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={icon}>
          <Popup>
            Sucursal Plaza Citadella. <br /> Av. Salvador Nava, S. L. P.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapView;
