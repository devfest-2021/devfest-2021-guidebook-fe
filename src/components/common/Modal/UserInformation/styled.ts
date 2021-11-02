import styled from 'styled-components';

const UserModalTitle = styled.div`
  font-size: 20px;
  @media (max-width: 320px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
const UserModalSubTitle = styled.div`
  color: ${(props) => props.theme.color.gray500};
  font-size: 16px;
  @media (max-width: 320px) {
    font-size: 13px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;
const UserModalTaskWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 280px) {
    justify-content: center;
  }
`;
const UserInfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 280px) {
    justify-content: center;
  }
`;
const UserImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const CountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 60px;
  @media (max-width: 500px) {
    margin-left: 60px;
  }
  @media (max-width: 400px) {
    margin-left: 40px;
  }
  @media (max-width: 320px) {
    margin-left: 30px;
  }
`;
const CountText = styled.div`
  font-weight: bold;
  font-size: 30px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 20px;
  }
`;
const Count = styled.div`
  font-weight: bold;
  font-size: 20px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 15px;
  }
`;
const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;
const UserModalStyledImg = styled.img`
  width: 150px;
  border-radius: 75px;
  @media (max-width: 500px) {
    width: 150px;
    height: 150px;
    border-radius: 75px;
  }
  @media (max-width: 400px) {
    width: 130px;
    height: 130px;
    border-radius: 65px;
  }
  @media (max-width: 320px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
`;
const UserModalUserInfoWrapper = styled.div`
  margin-top: 10px;
  @media (max-width: 400px) {
    margin-left: 10px;
  }
  @media (max-width: 280px) {
    margin: 0px;
  }
`;
const UserModalInnerWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 280px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const UserModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export {
  ButtonWrapper,
  UserModalTaskWrapper,
  UserModalUserInfoWrapper,
  UserInfoWrapper,
  UserModalSubTitle,
  UserModalTitle,
  UserModalStyledImg,
  UserModalInnerWrapper,
  UserModalWrapper,
  UserImageWrapper,
  CountWrapper,
  CountText,
  Count,
};
