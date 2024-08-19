import { StoreType } from "@/interface";
import React, { Dispatch, SetStateAction, useCallback, useEffect } from "react";

interface MarkerProps {
  map: any;
  storeDatas: any[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

const Markers = ({ map, storeDatas, setCurrentStore }: MarkerProps) => {
  const loadKaKaoMarkers = useCallback(() => {
    if (map) {
      // render MARKER
      storeDatas?.map((store) => {
        // 마커 설정
        const imageSrc = store?.bizcnd_code_nm
          ? `/images/markers/${store.bizcnd_code_nm}.png`
          : "/images/markers/default.png";

        const imageSize = new window.kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
        const imageOption = { offset: new window.kakao.maps.Point(27, 69) }; // 마커이미지 옵션 - 마커의 좌표와 일치시킬 이미지 내부 좌표

        // 마커이미지를 생성
        const markerImage = new window.kakao.maps.MarkerImage(
          imageSrc,
          imageSize,
          imageOption
        );

        // 마커 위치 설정
        const markerPosition = new window.kakao.maps.LatLng(
          store?.y_dnts,
          store?.x_cnts
        );

        // 마커 생성
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        // 마커를 지도 위에 설정
        marker.setMap(map);

        // 커스텀 오버레이 content
        var content = `<div class="infowindow">${store?.upso_nm}</div>`; // 인포 윈도우 : 업소명

        var customOverlay = new window.kakao.maps.CustomOverlay({
          position: markerPosition,
          content: content,
          xAnchor: 0.6,
          yAnchor: 0.91,
        });

        window.kakao.maps.event.addListener(marker, "mouseover", function () {
          customOverlay.setMap(map);
        });

        window.kakao.maps.event.addListener(marker, "mouseout", function () {
          customOverlay.setMap(null);
        });

        // 선택한 가게 저장
        window.kakao.maps.event.addListener(marker, "click", function () {
          setCurrentStore(store);
        });
      });
    }
  }, [map, setCurrentStore, storeDatas]);

  useEffect(() => {
    loadKaKaoMarkers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map]);

  return <></>;
};

export default Markers;
