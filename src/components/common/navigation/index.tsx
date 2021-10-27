import React from 'react';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from 'src/store/modal';
import { NavTaskWrapper, UserNameWrapper } from '../wrapper/Wrapper';
import {
  NavDesign,
  NavInner,
  NavTask,
  NavUserProfileImg,
  OpenedModal,
  StyledLink,
} from './styled';
import NavUserInfomation from './NavUserInfo/index';
import { NavUserEmail, NavUserName } from '../text/Title';
import { userState } from '../../../store/user';

const Navigation: React.FC = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);

  return (
    <NavDesign>
      <NavInner>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink to={'/'}>세션</StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink to={'/guestbook'}>방명록</StyledLink>
          </NavTask>
        </NavTaskWrapper>
        <NavTaskWrapper>
          {user.email.length > 5 && user.nickname.length > 1 ? (
            <NavUserInfomation />
          ) : (
            <NavTask>
              <OpenedModal
                onClick={() =>
                  setModal({ ...modal, [MODAL_KEY.SIGN_UP]: true })
                }
              >
                프로필 만들기
              </OpenedModal>
            </NavTask>
          )}
          {/* 프로필 생성되면 살려주세요 */}
          {/* <NavTask>
            <OpenedModal
              onClick={() => setModal({ ...Modal, [MODAL_KEY.SIGN_UP]: true })}
            >
              프로필 만들기
            </OpenedModal>
          </NavTask> */}
        </NavTaskWrapper>
      </NavInner>
    </NavDesign>
  );
};

export default Navigation;
