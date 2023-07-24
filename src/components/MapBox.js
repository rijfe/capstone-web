import { styled } from "styled-components";
import { useEffect } from "react";

function MapBox({ num1, num2 }) {
  const { kakao } = window;

  useEffect(() => {
    const mapScript = document.createElement("script");
    mapScript.async = true;
    mapScript.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=f7d4ebdd98b5b81712647b8f4f71e07b&autoload=false";
    document.head.appendChild(mapScript);

    const onLoadKakaoMap = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("kakaoMap");
        const options = {
          center: new kakao.maps.LatLng(num1, num2),
        };
        const map = new kakao.maps.Map(container, options);
        const markerPosition = new window.kakao.maps.LatLng(36.35183725966683, 127.3014373219504);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };
    mapScript.addEventListener("load", onLoadKakaoMap);

    return () => mapScript.removeEventListener("load", onLoadKakaoMap);
  }, [num1, num2]);
  return <MapContainer id="kakaoMap"></MapContainer>;
}

export default MapBox;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
`;
