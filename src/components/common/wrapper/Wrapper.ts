import styled from 'styled-components';

const StyledBox = styled.div`
  display: block;
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
const BoxElementWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 20px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  //max-height: calc(100vh - 200px);
  &::-webkit-scrollbar {
    display: none;
  }
  overflow-y: auto;
  @media (min-width: 320px) {
    width: 300px;
    padding: 35px 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 350px;
    padding: 45px 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 480px;
    padding: 24px 30px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 480px;
    padding: 24px 30px;
  }
`;
const BoxSizeWrapper = styled.div`
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
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  @media (min-width: 320px) {
    margin-top: 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    margin-top: 23px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    margin-top: 40px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    margin-top: 40px;
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
  display: block;
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
  border-radius: 20px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  //max-height: calc(100vh - 200px);
  &::-webkit-scrollbar{
    display: none;
  }
  overflow-y: auto;
  @media (min-width: 320px) {
    width: 300px;
    height: 510px;
    padding: 10px 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    width: 350px;
    height: 530px;
    padding: 20px 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    width: 500px;
    height: 670px;
    padding: 20px 30px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 500px;
    height: 675px;
    padding: 20px 30px;
  }
    
  }
`;
const NavTaskWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;

const UserNameWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 15px;
`;
export {
  NavTaskWrapper,
  UserNameWrapper,
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
