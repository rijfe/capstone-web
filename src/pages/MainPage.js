import { styled } from "styled-components";

function MainPage() {
  return (
    <MainnPageContainer>
      <MainTitle>hi! MainPage</MainTitle>
    </MainnPageContainer>
  );
}

export default MainPage;

const MainnPageContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const MainTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: black;
`;
