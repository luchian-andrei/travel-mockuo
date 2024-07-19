import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import { useState } from "react";

const MapComponent = () => {
  const [showInfo, setShowInfo] = useState(false);
  const pinPosition = { lat: 37.775604, lng: -122.419896 };
  const [markerRef, marker] = useAdvancedMarkerRef();

  return (
    <APIProvider apiKey={import.meta.env.VITE_MAP_API}>
      <Map
        mapId={import.meta.env.VITE_MAP_ID}
        defaultCenter={{ lat: 37.775604, lng: -122.419806 }}
        defaultZoom={15}
        disableDefaultUI={true}
        gestureHandling={"none"}
        mapTypeControl
        zoomControl
        streetViewControl
      >
        <AdvancedMarker
          position={pinPosition}
          ref={markerRef}
          onClick={() => setShowInfo(true)}
        >
          <Pin background={"burgundy"} glyphColor={"black"} />
        </AdvancedMarker>
        {showInfo && (
          <InfoWindow
            // position={pinPosition}
            anchor={marker}
            onCloseClick={() => setShowInfo(false)}
          >
            <p className="font-bold"> Be my guest in Rio</p>
          </InfoWindow>
        )}
      </Map>
    </APIProvider>
  );
};

export default MapComponent;
