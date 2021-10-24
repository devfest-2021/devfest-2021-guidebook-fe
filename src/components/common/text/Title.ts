import styled from 'styled-components';
import { ErrorMessage } from 'formik';

const MainTitle = styled.div`
  font-size: 30px;
  font-weight: bold;
  @media (min-width: 320px) {
    font-size: 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 26px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 33px;
  }
`;
const SubTitle = styled.div`
  display: flex;
  font-size: 20px;
  flex-direction: row;
  align-items: center;
  @media (min-width: 320px) {
    font-size: 15px;
    margin-top: 12px;
    margin-bottom: 6px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 15px;
    margin-top: 12px;
    margin-bottom: 6px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 6px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    margin-top: 20px;
    margin-bottom: 6px;
    font-size: 23px;
  }
`;
const HighLightSign = styled.div`
  display: inline-block;
  margin: 0 0 2px 6px;
  width: 10px;
  height: 10px;
  background: #f44336;
  border-radius: 5px;
`;
const Close = styled.div`
  width: 30px;
  height: 30px;

  &:before,
  &:after {
    position: absolute;
    content: ' ';

    background-color: #000;
    @media (min-width: 320px) {
      right: 30px;
      height: 23px;
      width: 2px;
    }
    @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
      right: 30px;
      height: 25px;
      width: 2px;
    }
    @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
      right: 55px;
      height: 30px;
      width: 3px;
    }
    @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
      right: 70px;
      height: 40px;
      width: 4px;
    }
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
  &:hover {
    cursor: pointer;
    color: #b8b8b8;
  }
`;
const StyledErrorMessage = styled(ErrorMessage)`
  color: #f44336;
  @media (min-width: 320px) {
    font-size: 12px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 13px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 18px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 20px;
  }
`;
export { MainTitle, SubTitle, HighLightSign, Close, StyledErrorMessage };
