import React, { useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import useGetMarkers from "@/hooks/useGetMarkers";
import { useGeolocation } from "@/hooks/useGeolocation";
import View from "@/components/Home/View/View";
import Navbar from "@/components/Home/Navbar/Navbar";
import Gps from "@/components/common/Gps/Gps";

export default function Home() {
  const { location, setLocation } = useGeolocation();
  const { markers } = useGetMarkers();
  const [viewShow, setViewShow] = useState(false);
  const [id, setId] = useState("");

  const onMarkerHanlder = (id: string) => {
    setId(id);
    setViewShow(true);
  };

  return (
    <div className="h-full relative">
      <Map
        center={location.center}
        isPanto={location.isPanto}
        level={3}
        style={{ width: "100%", height: "100%" }}
        onDragEnd={(map) => {
          // 드래그 멈췄을때
          const getCenter = map.getCenter();

          setLocation((prev) => ({
            ...prev,
            center: {
              lat: getCenter.getLat(),
              lng: getCenter.getLng(),
            },
          }));
        }}
        onDragStart={() => {
          // 드래그 시작할때
          setViewShow(false);
        }}
        onZoomChanged={(map) => {
          // 줌 움직일때
          const getCenter = map.getCenter();

          setLocation((prev) => ({
            ...prev,
            center: {
              lat: getCenter.getLat(),
              lng: getCenter.getLng(),
            },
          }));
        }}
      >
        {markers.map((marker) => (
          <MapMarker
            key={marker.id}
            position={{
              lat: marker.position.lat,
              lng: marker.position.lng,
            }}
            onClick={() => {
              setLocation((prev) => ({
                ...prev,
                center: {
                  lat: marker.position.lat,
                  lng: marker.position.lng,
                },
                isPanto: true,
              }));
              onMarkerHanlder(marker.id);
            }}
          />
        ))}
      </Map>

      <Navbar />
      <Gps setLocation={setLocation} />
      {viewShow && <View id={id} />}
      {/* <Setting/> */}
    </div>
  );
}
