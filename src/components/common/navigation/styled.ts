import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavDesign = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
  background: white;
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 1;
`;
const NavInner = styled.div`
  display: flex;
  flex: 1;
  width: 95%;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  @media (max-width: 500px) {
    height: 70px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  list-style: none;

  &:hover {
    color: #55af7a;
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
    color: #55af7a;
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

const NavUserProfileImg = styled.img`
  width: 50px;
  border-radius: 25px;
`;
export {
  NavInner,
  NavDesign,
  StyledLink,
  NavTask,
  OpenedModal,
  NavUserProfileImg,
};
