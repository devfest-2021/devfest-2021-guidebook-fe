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
    font-size: 20px;
  }
`;
const HighLightSign = styled.div`
  display: inline-block;
  margin: 0 0 2px 6px;
  width: 6px;
  height: 6px;
  background: #f44336;
  border-radius: 3px;
`;
export { MainTitle, SubTitle, HighLightSign };
