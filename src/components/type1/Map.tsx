import { useRef, useEffect } from "react";
import { styled } from "styled-components";

const MapContent = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 4px;
  border: 1px solid #CCCCCC;
  margin-bottom: 40px;
`;

const Map = ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const initMap = () => {
    const { naver } = window;
    const location = new naver.maps.LatLng(latitude, longitude);

    if (mapRef.current && naver) {
      const mapOptions = {
        center: location,
        zoom: 17,
      };

      const mapInstance = new naver.maps.Map(mapRef.current, mapOptions);

      const marker = new naver.maps.Marker({
        position: location,
        map: mapInstance,
      });

      naver.maps.Event.addListener(marker, "click", () => {
        mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
        mapInstance?.setZoom(17);
      });
    }
  };

  useEffect(() => {
    if (typeof window.naver !== "undefined") {
      initMap();
    } else {
      const existingScript = document.querySelector('script[src="https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ara9y50yn3"]') as HTMLScriptElement;
      if (!existingScript) {
        const script = document.createElement("script");
        script.src = "https://openapi.map.naver.com/oapi/v3/maps.js?ncpClientId=ara9y50yn3";
        script.onload = () => initMap();
        document.head.appendChild(script);
      } else {
        existingScript.onload = () => initMap();
      }
    }
  }, [latitude, longitude]);

  return (
      <MapContent id="map" ref={mapRef}></MapContent>
  );
};

export default Map;
