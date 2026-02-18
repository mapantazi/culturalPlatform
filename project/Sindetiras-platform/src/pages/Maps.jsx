import React, {useEffect, useMemo} from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, ZoomControl } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useTranslation } from "react-i18next";
import eventsData from "../data/events.json";

// Fix for icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// auto-fit
function FitBounds({ points}) {
  const map = useMap();
  
  useEffect(() => {
    const coords = points 
    .map(p => [Number(p.lat), Number(p.lng)])
    .filter(([lat, lng]) =>
      Number.isFinite(lat) && Number.isFinite(lng) &&
      lat >= -90 && lat<= 90 && lng >=-180 && lng <= 100
    );

    const bounds = L.latLngBounds(coords);
    if (bounds.isValid()) {
      map.fitBounds(bounds, {padding: [50,50]});
    }
  }, [points, map]);
  return null;
}

function FlyMarker({ point, zoom = 15}) {
  const map = useMap();
  const { t } = useTranslation();

  return (
    <Marker
      position={[point.lat, point.lng]}
      eventHandlers={{
        click: () => {
          map.flyTo([point.lat, point.lng], zoom, { duration: 0.8 });
        },
      }}
    >
      <Popup>
        <strong>{point.title}</strong><br />
        {point.location}<br />
        {point.description && (<><small>{point.description}</small> <br /></>)}
        {point.link && (
          <a href={point.link} target="_blank" rel="noopener noreferrer">
            {t("map.view_in_maps")}
          </a>
        )}
      </Popup>
    </Marker>
  );
}

const MapComponent = () => {
    //const [events, setEvents] = useState([]);
    const { t, i18n } = useTranslation();
    const isEn = i18n.language?.startsWith("en");

    const pins = useMemo(() => {
      return eventsData
      .filter(e => Number.isFinite(Number(e.lat)) && Number.isFinite(Number(e.lng)))
      .map((e, idx) => ({
        id: `${e.title || "event"}-${idx}`,
        lat: Number(e.lat),
        lng: Number(e.lng),
        title:
          isEn 
          ? (e.title_en || e.title) 
          : e.title,
        description:
          isEn
            ? (e.description_en || e.description)
            : e.description,
        location: 
          isEn
          ? (e.location_en || e.location)
          : e.location,
          link: e.location_url, 
      }));
  }, [i18n.language, isEn]);

  return ( 
   <div className="w-full h-screen px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6">
        {t("map.title")}
      </h1>

      <MapContainer
        // centered in Zagora
        center={[39.4444, 23.1039]}
        zoom={10}
        scrollWheelZoom={true}
        style={{ height: "80vh", width: "100%" }}
        preferCanvas
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <ZoomControl position="bottomright" />

        <FitBounds points={pins} />

        {pins.map((p) => (<FlyMarker key={p.id} point={p} />))}

      </MapContainer>
    </div>
  );
};
    
export default MapComponent;
