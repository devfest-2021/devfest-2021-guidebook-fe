import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavDesign = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
`;
const NavAlign = styled.div`
  display: flex;
  flex: 1;
  width: 95%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const NavTaskWrapper = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 0px;
`;

const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  list-style: none;
`;
const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 5px;
  padding: 0px 8px;
  cursor: pointer;
  color: #b8b8b8;
  font-style: normal;
  font-size: 24px;
  word-break: keep-all;
  &:hover {
    color: #404040;
    font-weight: bold;
  }
  @media (max-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 24px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 24px;
  }
  @media (max-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 20px;
  }
`;
export { NavAlign, NavDesign, NavTaskWrapper, StyledLink, NavTask };
