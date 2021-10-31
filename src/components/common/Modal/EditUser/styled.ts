import styled from 'styled-components';

export const EditStyledInput = styled.input`
  border-color: #aaaaaa;
  border-width: 1px;
  border-style: solid;
  box-sizing: border-box;
  height: 50px;
  width: 100%;
  padding: 0px 10px;
  margin: 0px;

  @media (min-width: 320px) {
    height: 40px;
    font-size: 15px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    height: 40px;
    font-size: 15px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    height: 50px;
    font-size: 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    height: 50px;
    font-size: 20px;
  }
`;
