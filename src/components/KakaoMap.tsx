/* global kakao */

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

export default function KakaoMap() {
  const loadKakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById("map");
      const mapOption = {
        center: new kakao.maps.LatLng(
          DEFAULT_HANSSEM_CURRENT_MAP_INFO.LAT,
          DEFAULT_HANSSEM_CURRENT_MAP_INFO.LNG
        ),
        level: 4,
      };

      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      // render MARKER
      stores?.["DATA"]?.map((store) => {
        // 마커 위치 설정
        const markerPosition = new window.kakao.maps.LatLng(
          store?.y_dnts,
          store?.x_cnts
        );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });

        // 마커를 지도 위에 설정
        marker.setMap(map);
      });
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
