import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { MODAL_KEY, modalState } from 'src/store/modal';
import { NavTaskWrapper } from '../wrapper/Wrapper';
import {
  NavDesign,
  NavInner,
  NavTask,
  OpenedModal,
  StyledLink,
} from './styled';
import NavUserInfomation from './NavUserInfo/index';
import { userState } from '../../../store/user';
import '../Modal/UserInformation/UserInfomation.css';

const Navigation: React.FC = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [user, setUser] = useRecoilState(userState);
  const [routeStyle, setRoutStyle] = useState('session');

  return (
    <NavDesign>
      <NavInner>
        <NavTaskWrapper>
          <NavTask>
            <StyledLink
              to={'/'}
              className={routeStyle == 'session' ? 'active' : 'noneActive'}
              onClick={() => {
                setRoutStyle('session');
              }}
            >
              세션
            </StyledLink>
          </NavTask>
          <NavTask>
            <StyledLink
              to={'/guestbook'}
              className={routeStyle == 'guestbook' ? 'active' : 'noneActive'}
              onClick={() => {
                setRoutStyle('guestbook');
              }}
            >
              방명록
            </StyledLink>
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
