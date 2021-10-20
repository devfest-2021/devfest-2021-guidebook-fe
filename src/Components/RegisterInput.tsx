import React from 'react';
import JoinBtn from './JoinBtn';
import styled from 'styled-components';

const EmailInputBox = styled.div`
  max-width: 750px;
  border-color: #aaaaaa;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const BoxStyle = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 22px;
  width: 90%;
`;
const SnsBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const BtnElement = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const BoxMainTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
`;
const BoxSubTitle = styled.div`
  display: flex;
  font-size: 20px;
  margin-top: 5%;
  margin-bottom: 15px;
  flex-direction: row;
`;
const StyledInput = styled.input`
  border-radius: 10px;
  border-color: #aaaaaa;
  border-width: 2px;
  border-style: solid;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  padding: 0px 10px;
  margin: 0px;
  font-size: 20px;
`;
const HighLightSign = styled.div`
  color: #ff0000;
`;

const RegisterInput = () => {
  return (
    <>
      <EmailInputBox>
        <BoxStyle>
          <BoxMainTitle>프로필 입력하기</BoxMainTitle>
          <BoxSubTitle>
            이메일을 입력해주세요! &nbsp;<HighLightSign>*</HighLightSign>
          </BoxSubTitle>
          <StyledInput />
          <SnsBox>
            <div>
              <BoxSubTitle>Github</BoxSubTitle>
              <StyledInput />
            </div>
            <div>
              <BoxSubTitle>Instagram</BoxSubTitle>
              <StyledInput placeholder={'@OOO'} />
            </div>
          </SnsBox>
          <BoxSubTitle>응원의 한마디</BoxSubTitle>
          <StyledInput />
          <BoxSubTitle>참가자 이름</BoxSubTitle>
          <StyledInput />
          <BoxSubTitle>소속</BoxSubTitle>
          <StyledInput />
          <BtnElement>
            <JoinBtn />
          </BtnElement>
        </BoxStyle>
      </EmailInputBox>
    </>
  );
};

export default RegisterInput;
