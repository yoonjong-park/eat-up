/* global kakao */

import { Dispatch, SetStateAction } from "react";
import Script from "next/script";
import { default as stores } from "@/data/store_data.json";

// declare global : 모듈 파일에서도 전역 참조가 가능한 선언 코드를 작성하고 싶을 때 사용
declare global {
  interface Window {
    kakao: any;
  }
  const kakao: any;
}

const DEFAULT_HANSSEM_CURRENT_MAP_INFO = {
  LAT: 37.576216,
  LNG: 126.899114,
};

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
}

export default function KakaoMap({ setMap }: MapProps) {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(
          DEFAULT_HANSSEM_CURRENT_MAP_INFO.LAT,
          DEFAULT_HANSSEM_CURRENT_MAP_INFO.LNG
        ),
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
    });
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT_ID}&autoload=false`}
        onReady={loadKakaoMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
