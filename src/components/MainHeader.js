import { styled } from "styled-components";
import { useRecoilState } from "recoil";
import { bodyState } from "../store/bodyState";

function MainHeader({}) {
  const [body, setBody] = useRecoilState(bodyState);
  const MapBtnClick = () => {
    setBody(true);
  };
  const ListBtnClick = () => {
    setBody(false);
  };

  return (
    <MainHeaderContainer>
      <HeaderTextContainer>
        <HeaderText>MOBICOM</HeaderText>
      </HeaderTextContainer>
      <MapBtn onClick={MapBtnClick}>
        <BtnText>지도</BtnText>
      </MapBtn>
      <ListBtn onClick={ListBtnClick}>
        <BtnText>명단</BtnText>
      </ListBtn>
      <UserTextContainer>
        <UserText>홍길동님 환영합니다.</UserText>
      </UserTextContainer>
    </MainHeaderContainer>
  );
}

export default MainHeader;

const MainHeaderContainer = styled.div`
  width: 100%;
  height: 8rem;
  border-bottom-style: solid;
  border-bottom-width: 0.1rem;
  border-color: rgb(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
`;

const HeaderTextContainer = styled.div`
  height: 100%;
  width: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeaderText = styled.h1`
  font-size: 5rem;
  font-weight: 700;
  color: #6cbae7;
  text-shadow: -1px 0px black, 0px 1px white, 1px 0px white, 0px -1px black;
`;

const MapBtn = styled.div`
  height: 100%;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-bottom-width: 3px;
    border-bottom-style: solid;
  }
`;

const BtnText = styled.h2`
  font-size: 3rem;
  font-weight: 500;
  &:hover {
    font-weight: 900;
  }
`;

const ListBtn = styled.div`
  height: 100%;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    font-weight: bold;
    border-bottom-width: 3px;
    border-bottom-style: solid;
  }
`;

const UserTextContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: end;
  margin-right: 3rem;
`;

const UserText = styled.h5`
  font-size: 2rem;
  font-weight: 500;
`;
