import React from 'react';
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

  return (
    <NavDesign>
      <NavAlign>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink to={'/'}>세션</StyledLink>
          </NavTask>
          <NavTask>
            {/* 방명록 연결 */}
            <StyledLink to={'/guestbook'}>방명록</StyledLink>
          </NavTask>
        </NavTaskWrapper>
        <NavTaskWrapper>
          {/* 프로필 생성되면 살려주세요 */}
          {/* <NavTask>
            <OpenedModal
              onClick={() => setModal({ ...modal, [MODAL_KEY.SIGN_UP]: true })}
            >
              프로필 만들기
            </OpenedModal>
          </NavTask> */}
        </NavTaskWrapper>
      </NavAlign>
    </NavDesign>
  );
};

export default Navigation;
