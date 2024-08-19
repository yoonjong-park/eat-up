import { useState } from "react";
import KakaoMap from "@/components/KakaoMap";
import Markers from "@/components/Markers";

import { default as stores } from "@/data/store_data.json";

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  const storeDatas = stores["DATA"];

  return (
    <>
      <KakaoMap setMap={setMap} />
      <Markers
        storeDatas={storeDatas}
        map={map}
        setCurrentStore={setCurrentStore}
      />
    </>
  );
}
