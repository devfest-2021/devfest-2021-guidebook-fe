import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavDesign = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
  position: static;
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
  text-decoration: none;
  color: #b8b8b8;
  list-style: none;
  &:hover {
    color: #4e4e4e;
    font-weight: bold;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
    font-weight: normal;
    color: #b8b8b8;
  }
`;

const OpenedModal = styled.div`
  text-decoration: none;
  color: inherit;
  list-style: none;
  &:hover {
    color: #4e4e4e;
    font-weight: bold;
    text-decoration: none;
  }
  &:focus {
    text-decoration: none;
    color: #b8b8b8;
  }
`;

const NavTask = styled.li`
  display: flex;
  align-items: center;
  margin: 0px 5px;
  padding: 0px 8px;
  cursor: pointer;
  color: #b8b8b8;
  font-style: normal;
  word-break: keep-all;
  list-style: none;
  text-decoration: none;

  @media (min-width: ${(props) => props.theme.windowSize.mobile}px) {
    font-size: 20px;
  }
  @media (min-width: 320px) {
    font-size: 19px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.tablet}px) {
    font-size: 20px;
  }
  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    font-size: 20px;
  }
`;
export {
  NavAlign,
  NavDesign,
  NavTaskWrapper,
  StyledLink,
  NavTask,
  OpenedModal,
};
