import React from 'react';

import {
  NavDesign,
  NavAlign,
  StyledLink,
  NavTaskWrapper,
  NavTask,
} from './styled';

const Navigation = () => {
  return (
    <NavDesign>
      <NavAlign>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink to={'/session'}>세션</StyledLink>
          </NavTask>
          <NavTask>
            {/* 방명록 연결 */}
            <StyledLink to={'/session'}>방명록</StyledLink>
          </NavTask>
        </NavTaskWrapper>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink to={'/signup'}>프로필 만들기</StyledLink>
          </NavTask>
        </NavTaskWrapper>
      </NavAlign>
    </NavDesign>
  );
};

export default Navigation;
