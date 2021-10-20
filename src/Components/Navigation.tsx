import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavDesign = styled.div`
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.03);
`;
const NavAlign = styled.div`
  display: flex;
  flex: 1;
  width: 92%;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  margin: auto;
`;

const StyledNav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
const HeaderButton = styled.li`
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
`;
const StyledLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  list-style: none;
`;
const StyledHr = styled.hr`
  color: #676c72;
  opacity: 25%;
`;

const Navigation = () => {
  return (
    <NavDesign>
      <NavAlign>
        <StyledNav>
          <HeaderButton>
            <StyledLink to={'/Section'}>세션</StyledLink>
          </HeaderButton>
          <HeaderButton>
            {/* 방명록 연결 */}
            <StyledLink to={'/Section'}>방명록</StyledLink>
          </HeaderButton>
        </StyledNav>
        <StyledNav>
          <HeaderButton>
            <StyledLink to={'/Register'}>프로필 만들기</StyledLink>
          </HeaderButton>
        </StyledNav>
      </NavAlign>
    </NavDesign>
  );
};

export default Navigation;
