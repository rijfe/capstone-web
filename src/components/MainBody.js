import { styled } from "styled-components";
import { useRecoilValue } from "recoil";
import { getBodyState } from "../store/bodyState";
import MapBox from "./MapBox";

function MainBody() {
  const state = useRecoilValue(getBodyState);
  return <MainBodyContainer>{state ? <MapBox num1={36.35183725966683} num2={127.3014373219504} /> : null}</MainBodyContainer>;
}

export default MainBody;

const MainBodyContainer = styled.div`
  flex: 1;
`;
