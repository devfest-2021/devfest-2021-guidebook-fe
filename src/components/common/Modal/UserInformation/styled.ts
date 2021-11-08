import styled from 'styled-components';

export const UserModalTitle = styled.div`
  font-size: 20px;
  @media (max-width: 320px) {
    font-size: 18px;
  }
  @media (max-width: 400px) {
    font-size: 18px;
  }
`;
export const UserModalSubTitle = styled.div`
  color: ${(props) => props.theme.color.gray500};
  font-size: 16px;
  @media (max-width: 320px) {
    font-size: 13px;
  }
  @media (max-width: 400px) {
    font-size: 13px;
  }
`;
export const UserModalTaskWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  @media (max-width: 280px) {
    justify-content: center;
  }
`;
export const UserInfoWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;

  @media (max-width: 280px) {
    justify-content: center;
  }
`;
export const UserImageWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const CountWrapper = styled.div`
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
export const CountText = styled.div`
  font-weight: bold;
  font-size: 30px;
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 20px;
  }
`;
export const Count = styled.div`
  font-weight: bold;
  font-size: 20px;
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 15px;
  }
`;
export const ButtonWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;
export const UserModalStyledImg = styled.img`
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
export const UserModalUserInfoWrapper = styled.div`
  margin-top: 10px;
  @media (max-width: 400px) {
    margin-left: 10px;
  }
  @media (max-width: 280px) {
    margin: 0px;
  }
`;
export const UserModalInnerWrapper = styled.div`
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
export const UserModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const StyledElementWrapper = styled.div`
  margin-bottom: 10px;
`;
