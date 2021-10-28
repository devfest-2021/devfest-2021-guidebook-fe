import React, { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from '../../../../store/user';
import { ALERT_KEY, alertState } from '../../../../store/alert';
import {
  StyledImage,
  SuccessAlertInnerWrapper,
  SuccessAlertText,
  SuccessAlertWrapper,
  SuccessImage,
} from './styled';

const variants = {
  active: {
    opacity: 1,
    y: 0,
  },
  unActive: {
    opacity: 0,
  },
};
const SuccessAlert: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const [alert, setAlert] = useRecoilState(alertState);
  const [toggle, setToggle] = useState<boolean>();

  useEffect(() => {
    setToggle(alert.success);
    setTimeout(() => {
      setToggle(false);
    }, 5000);
    setTimeout(() => {
      setAlert({ ...alert, [ALERT_KEY.SUCCESS_KEY]: false });
    }, 6000);
  }, [user]);

  return (
    <>
      <SuccessAlertWrapper
        variants={variants}
        animate={toggle ? 'active' : 'unActive'}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <SuccessAlertInnerWrapper>
          <SuccessImage>
            <StyledImage
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="CheckCircleOutlineIcon"
            >
              <path d="M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </StyledImage>
          </SuccessImage>
          <SuccessAlertText>
            로그인 성공! 안녕하세요 {user.nickname}님
          </SuccessAlertText>
        </SuccessAlertInnerWrapper>
      </SuccessAlertWrapper>
    </>
  );
};

export default SuccessAlert;
