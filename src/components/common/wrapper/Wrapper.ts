import styled from 'styled-components';

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
const BoxElementWrapper = styled.div`
  display: inline-block;
  flex-direction: column;
  justify-content: space-around;
  width: 90%;
  @media (min-width: 320px) {
    margin-top: 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    margin-top: 15px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    margin-top: 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    margin-top: 20px;
  }
`;
const BoxSizeWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (min-width: 320px) {
    width: 90%;
    height: 50%;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 90%;
    height: 40%;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 60%;
    height: 40%;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 600px;
    height: 30%;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 320px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
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
  //max-height: calc(100vh - 200px);
  overflow-y: auto;
  @media (min-width: 320px) {
    width: 300px;
    height: 500px;
    padding: 10px 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 300px;
    height: 510px;
    padding: 3% 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 60%;
    height: 700px;
    padding: 3% 4%;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 50%;
    height: 760px;
  }
    
  }
`;
export {
  BoxSizeWrapper,
  BoxElementWrapper,
  ButtonWrapper,
  SnsWrapper,
  SnsElementWrapper,
  ModalWrapper,
  ModalOverlay,
  ModalInner,
  StyledBox,
};
