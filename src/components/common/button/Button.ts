import styled from 'styled-components';

const StyledJoinButton = styled.button`
  background: #55af7a;
  color: #fff;
  font-size: 21px;
  border-style: solid;
  border-width: 1px;
  border-radius: 10px;
  border-color: #676c72;
  &:hover {
    border-width: 2px;
    cursor: pointer;
  }
  @media (min-width: 320px) {
    font-size: 15px;
    padding: 6px 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 15px;
    padding: 6px 10px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 20px;
  }
`;

export { StyledJoinButton };
