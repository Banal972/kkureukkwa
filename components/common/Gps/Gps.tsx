import React from "react";
import { MdOutlineGpsFixed } from "react-icons/md";

export default function Gps({ setLocation }: { setLocation: any }) {
  const onGpsHandler = () => {
    const { geolocation } = navigator;

    if (!geolocation) return;

    geolocation.getCurrentPosition(
      (pos) => {
        // 성공
        const { coords } = pos;

        setLocation((prev: any) => ({
          ...prev,
          center: {
            lat: coords.latitude,
            lng: coords.longitude,
          },
          isPanto: true,
        }));
      },
      () => {
        // 실패
      },
      {
        // 옵션
      },
    );
  };

  return (
    <button
      className="absolute left-[5%] bottom-[5%] bg-white rounded-full w-10 h-10 z-10 text-xl flex items-center justify-center border cursor-pointer"
      onClick={onGpsHandler}
    >
      <MdOutlineGpsFixed />
    </button>
  );
}
