/* global naver */

import Script from "next/script";

// declare global : 모듈 파일에서도 전역 참조가 가능한 선언 코드를 작성하고 싶을 때 사용
declare global {
  interface Window {
    naver: any;
  }
  const naver: any;
}

export default function NaverMap() {
  const loadNaverMap = () => {
    const mapContainer = document.getElementById("map");
    const mapOption = {
      center: new naver.maps.LatLng(33.450701, 126.570667),
      zoom: 15,
    };
    new naver.maps.Map(mapContainer, mapOption);
  };
  return (
    <>
      <Script
        strategy="afterInteractive"
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID}&submodules=panorama&autoload=false`}
        onReady={loadNaverMap}
      />
      <div id="map" className="w-full h-screen"></div>
    </>
  );
}
