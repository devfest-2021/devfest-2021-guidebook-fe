import styled from 'styled-components';

const BoxSizeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 90%;
    height: 76%;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 60%;
    height: 75%;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 50%;
    height: 70%;
  }
`;
const StyledBox = styled.div`
  border-color: #aaaaaa;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 5%;
  margin-bottom: 5%;
`;
const BoxElementWrapper = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 22px;
  width: 90%;
`;
const SnsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
const SnsElementWrapper = styled.div`
  width: 46%;
`;

export {
  BoxSizeWrapper,
  StyledBox,
  ButtonWrapper,
  BoxElementWrapper,
  SnsWrapper,
  SnsElementWrapper,
};
