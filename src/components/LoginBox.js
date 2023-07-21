import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

function LoginBox() {
  const navigate = useNavigate();
  return (
    <LoginBoxcontainer>
      <TitleBox>
        <NameText>MOBICOM</NameText>
        <TitleText>관리자 로그인</TitleText>
      </TitleBox>
      <InputBox>
        <IdInput placeholder="아이디"></IdInput>
        <PwdInput placeholder="비밀번호"></PwdInput>
        <SginUpBox>
          <SiunUpText>회원가입</SiunUpText>
        </SginUpBox>
      </InputBox>
      <BtnBox>
        <LoginBtn
          onClick={() => {
            navigate("/main");
          }}
        >
          <BtnText>로그인</BtnText>
        </LoginBtn>
      </BtnBox>
    </LoginBoxcontainer>
  );
}

export default LoginBox;

const LoginBoxcontainer = styled.div`
  width: 20%;
  height: 40%;
  display: flex;
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const TitleBox = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const NameText = styled.h5`
  font-weight: 500;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TitleText = styled.h2`
  font-weight: 700;
  font-size: 40px;
`;

const InputBox = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IdInput = styled.input`
  width: 80%;
  height: 25%;
  border-radius: 6px;
  border-width: 1px;
  margin-bottom: 20px;
`;

const PwdInput = styled.input`
  width: 80%;
  height: 25%;
  border-radius: 6px;
  border-width: 1px;
`;

const SginUpBox = styled.div`
  width: 80%;
  height: 30%;
  text-align: right;
`;

const SiunUpText = styled.p`
  font-size: 15px;
  margin-top: 20px;
  opacity: 0.7;
`;

const BtnBox = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
  justify-content: center;
`;

const LoginBtn = styled.div`
  width: 80%;
  height: 60%;
  border-radius: 6px;
  background-color: #6cbae7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BtnText = styled.h2`
  color: white;
  font-weight: 500;
  font-size: 30px;
`;
