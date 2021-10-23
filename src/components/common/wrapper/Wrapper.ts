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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 6%;
  margin-bottom: 5%;
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
const ModalWrapper = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
`;

const ModalOverlay = styled.div`
  box-sizing: border-box;
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;

  @media (min-width: 320px) {
    width: 300px;
    height: 500px;
    padding: 10px 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 300px;
    height: 500px;
    padding: 10px 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 60%;
    height: 65%;
    padding: 3% 4%;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 50%;
    height: 50%;
  }
    
  }
`;
export {
  BoxSizeWrapper,
  ButtonWrapper,
  SnsWrapper,
  SnsElementWrapper,
  ModalWrapper,
  ModalOverlay,
  ModalInner,
};
