import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { modalState, MODAL_KEY } from 'src/store/modal';
import {
  NavDesign,
  NavAlign,
  StyledLink,
  NavTaskWrapper,
  NavTask,
  OpenedModal,
} from './styled';

const Navigation: React.FC = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [activeNav, setActiveNav] = useState<string>('session');
  console.log('activeNav: ' + activeNav);
  return (
    <NavDesign>
      <NavAlign>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink to={'/'}>세션</StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink to={'/guestbook'}>방명록</StyledLink>
          </NavTask>
        </NavTaskWrapper>
        <NavTaskWrapper>
          <NavTask>
            <OpenedModal
              onClick={() => setModal({ ...modal, [MODAL_KEY.SIGN_UP]: true })}
            >
              프로필 만들기
            </OpenedModal>
          </NavTask>
        </NavTaskWrapper>
      </NavAlign>
    </NavDesign>
  );
};

export default Navigation;
