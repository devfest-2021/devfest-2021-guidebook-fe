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
    font-size: 30px;
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
    font-size: 16px;
    margin-top: 20px;
    margin-bottom: 6px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    margin-top: 22px;
    margin-bottom: 5px;
    font-size: 16px;
  }
`;
const HighLightSign = styled.div`
  display: inline-block;
  margin: 0 0 2px 6px;
  width: 7px;
  height: 7px;
  background: #f44336;
  border-radius: 4px;
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
      top: 12px;
      right: 30px;
      height: 23px;
      width: 2px;
    }
    @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
      top: 22px;
      right: 30px;
      height: 25px;
      width: 2px;
    }
    @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
      top: 24px;
      right: 50px;
      height: 30px;
      width: 3px;
    }
    @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
      top: 26px;
      right: 50px;
      height: 30px;
      width: 3px;
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
    font-size: 15px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 15px;
  }
`;
export { MainTitle, SubTitle, HighLightSign, Close, StyledErrorMessage };
