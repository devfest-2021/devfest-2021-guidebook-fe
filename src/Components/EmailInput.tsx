import React from 'react';
import styled from 'styled-components';
import JoinBtn from './JoinBtn';

const EmailInputBox = styled.div`
  min-width: 80%;
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
const BtnElement = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 10%;
  margin-bottom: 10%;
`;
const BoxMainTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 5%;
`;
const BoxSubTitle = styled.div`
  display: flex;
  font-size: 20px;
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
  padding: 5px;
  margin: 0px;
  font-size: 20px;
`;
const HighLightSign = styled.div`
  color: #ff0000;
`;
const EmailInput = () => {
  return (
    <>
      <EmailInputBox>
        <BoxStyle>
          <BoxMainTitle>이메일 입력</BoxMainTitle>
          <BoxSubTitle>
            이메일을 입력해주세요! &nbsp;<HighLightSign>*</HighLightSign>
          </BoxSubTitle>
          <StyledInput />
          <BtnElement>
            <JoinBtn />
          </BtnElement>
        </BoxStyle>
      </EmailInputBox>
    </>
  );
};

export default EmailInput;
