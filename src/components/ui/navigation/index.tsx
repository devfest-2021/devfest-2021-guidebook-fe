import React, { ReactNode, useState } from 'react';
import {
  NavDesign,
  NavAlign,
  StyledLink,
  NavTaskWrapper,
  NavTask,
  OpenModal,
} from './styled';
import Modal from './Modal';

export interface modalOpenProps {
  modalOpen: boolean;
}

const Navigation = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <NavDesign>
      {modalOpen ? <Modal /> : null}
      <NavAlign>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink to={'/main/session'}>세션</StyledLink>
          </NavTask>
          <NavTask>
            {/* 방명록 연결 */}
            <StyledLink to={'/main/guestbook'}>방명록</StyledLink>
          </NavTask>
        </NavTaskWrapper>
        <NavTaskWrapper>
          <NavTask>
            <OpenModal onClick={() => setModalOpen(!modalOpen)}>
              프로필 만들기
            </OpenModal>
          </NavTask>
        </NavTaskWrapper>
      </NavAlign>
    </NavDesign>
  );
};

export default Navigation;
