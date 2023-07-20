import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <LoginPageContainer>
      <LoginTitle>hi! LoginPage</LoginTitle>
      <LoginBtn
        onClick={() => {
          navigate("/main");
        }}
      >
        로그인
      </LoginBtn>
    </LoginPageContainer>
  );
}

export default LoginPage;

const LoginPageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const LoginTitle = styled.p`
  font-size: 14px;
  font-weight: 400;
`;

const LoginBtn = styled.button`
  width: 80px;
  height: 20px;
  background-color: #aed3f4;
`;
