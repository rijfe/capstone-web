import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { useRecoilState } from "recoil";

import { userName } from "../store/userName";

function LoginBox() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwdCheck, setPwdCheck] = useState(false);

  const [name, setName] = useRecoilState(userName);
  const pwdRef = useRef(null);

  const navigate = useNavigate();

  const pwdCheckHandler = async () => {
    const password = await pwdRef.current;
    if (password === null) return;

    await setPwdCheck(!pwdCheck);

    if (!pwdCheck) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  };

  const setUserId = (event) => {
    setId(event.target.value);
    // console.log(event.target.value);
  };

  const setUserPwd = (event) => {
    setPwd(event.target.value);
    // console.log(event.target.value);
  };

  const getLoginUserData = async () => {
    await fetch(`/list/${id}`, {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((result) => {
      result.json().then((response) => {
        setName(response.UserInfo.name);
      });
    });
  };

  const LoginBtnClick = async () => {
    if (id === "") {
      alert("아이디를 입력해주세요!");
      return;
    }
    if (pwd === "") {
      alert("비밀번호를 입력해주세요!");
    }
    await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: id,
        password: pwd,
      }),
    }).then((result) => {
      result.json().then((re) => {
        //console.log(re);
      });
      //console.log(result);
      if (result.status === 200) {
        getLoginUserData();
        navigate("/main");
      }
    });
    // console.log(id);
    // console.log(pwd);
  };
  return (
    <LoginBoxcontainer>
      <TitleBox>
        <NameText>MOBICOM</NameText>
        <TitleText>관리자 로그인</TitleText>
      </TitleBox>
      <InputBox>
        <IdInput placeholder="아이디" value={id} onChange={setUserId}></IdInput>
        <PwdInput placeholder="비밀번호" type="password" value={pwd} onChange={setUserPwd} ref={pwdRef}></PwdInput>
        <CheckBoxContainer>
          <CheckBox type="checkbox" onChange={pwdCheckHandler}></CheckBox>비밀번호 보기
        </CheckBoxContainer>
      </InputBox>
      <BtnBox>
        <LoginBtn
          onClick={() => {
            // navigate("/main");
            LoginBtnClick();
          }}
        >
          <BtnText>로그인</BtnText>
        </LoginBtn>
      </BtnBox>
      <BottomText>@Mobicom</BottomText>
    </LoginBoxcontainer>
  );
}

export default LoginBox;

const LoginBoxcontainer = styled.div`
  width: 40rem;
  height: 40rem;
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
  font-size: 3rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const TitleText = styled.h2`
  font-weight: 700;
  font-size: 4rem;
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
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
`;

const PwdInput = styled.input`
  width: 80%;
  height: 25%;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
`;

const BottomText = styled.p`
  font-size: 1.5rem;
  opacity: 0.7;
  margin-bottom: 2rem;
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
  &:hover {
    border: 1px solid;
  }
`;

const BtnText = styled.h2`
  color: white;
  font-weight: 500;
  font-size: 30px;
`;

const CheckBoxContainer = styled.div`
  width: 80%;
  heigth: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  font-size: 1rem;
`;

const CheckBox = styled.input`
  width: 1rem;
  height: 1rem;
`;
