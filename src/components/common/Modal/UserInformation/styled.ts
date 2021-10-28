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
  margin-top: 5px;
  display: flex;
  align-items: center;
`;
const UserModalStyledImg = styled.img`
  width: 150px;
  border-radius: 75px;
  @media (max-width: 500px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  @media (max-width: 400px) {
    width: 100px;
    height: 100px;
    border-radius: 50px;
  }
  @media (max-width: 320px) {
    width: 90px;
    height: 90px;
    border-radius: 45px;
  }
`;
const UserModalUserInfoWrapper = styled.div`
  margin-left: 50px;
  @media (max-width: 400px) {
    margin-left: 20px;
  }
`;
const UserModalInnerWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
`;
const UserModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export {
  UserModalTaskWrapper,
  UserModalUserInfoWrapper,
  UserModalSubTitle,
  UserModalTitle,
  UserModalStyledImg,
  UserModalInnerWrapper,
  UserModalWrapper,
};
