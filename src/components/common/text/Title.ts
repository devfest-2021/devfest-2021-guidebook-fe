import styled from 'styled-components';

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
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 20px;
  }
`;
const HighLightSign = styled.div`
  color: #ff0000;
`;
export { MainTitle, SubTitle, HighLightSign };
