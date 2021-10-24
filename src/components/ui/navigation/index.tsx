import React, { ReactNode, useState } from 'react';
import {
  NavDesign,
  NavAlign,
  StyledLink,
  NavTaskWrapper,
  NavTask,
  OpenedModal,
} from './styled';
import Modal from './Modal';

const Navigation: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalHandle = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <NavDesign>
      {modalOpen ? <Modal modalHandle={modalHandle} /> : null}
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
            <OpenedModal onClick={() => setModalOpen(!modalOpen)}>
              프로필 만들기
            </OpenedModal>
          </NavTask>
        </NavTaskWrapper>
      </NavAlign>
    </NavDesign>
  );
};

export default Navigation;
