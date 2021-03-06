import styled from 'styled-components';

export const StyledJoinButton = styled.button`
  background: #55af7a;
  color: #fff;
  font-size: 21px;
  border: 0;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 320px) {
    font-size: 15px;
    padding: 7px 12px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 15px;
    padding: 7px 12px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 15px;
    padding: 7px 12px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 15px;
    padding: 7px 12px;
  }
`;
