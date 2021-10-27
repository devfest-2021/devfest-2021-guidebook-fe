import styled from 'styled-components';

const UserModalTitle = styled.div`
  font-size: 20px;
`;
const UserModalSubTitle = styled.div`
  color: ${(props) => props.theme.color.gray500};
  font-size: 16px;
`;
const UserModalTaskWrapper = styled.div`
  margin-top: 5px;
`;
const UserModalStyledImg = styled.img`
  width: 150px;
  border-radius: 75px;
`;
const UserModalUserInfoWrapper = styled.div`
  margin-left: 50px;
`;
const UserModalWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  margin-bottom: 30px;
`;
export {
  UserModalTaskWrapper,
  UserModalUserInfoWrapper,
  UserModalSubTitle,
  UserModalTitle,
  UserModalStyledImg,
  UserModalWrapper,
};
