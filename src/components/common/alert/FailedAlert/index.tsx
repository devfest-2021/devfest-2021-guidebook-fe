import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ALERT_KEY, alertState } from '../../../../store/alert';
import {
  FailAlertInnerWrapper,
  FailAlertText,
  FailAlertWrapper,
  FailImage,
  StyledImage,
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
const FailAlert: React.FC = () => {
  const [alert, setAlert] = useRecoilState(alertState);
  const [toggle, setToggle] = useState<boolean>();
  useEffect(() => {
    setToggle(alert.fail);
    setTimeout(() => {
      setToggle(false);
    }, 5000);
    setTimeout(() => {
      setAlert({ ...alert, [ALERT_KEY.FAIL_KEY]: false });
    }, 5000);
  }, []);
  return (
    <>
      <FailAlertWrapper
        variants={variants}
        animate={alert.fail ? 'active' : 'unActive'}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.4 }}
      >
        <FailAlertInnerWrapper>
          <FailImage>
            <StyledImage
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              data-testid="ErrorOutlineIcon"
            >
              <path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
            </StyledImage>
          </FailImage>
          <FailAlertText>출석기간이 아닙니다!</FailAlertText>
        </FailAlertInnerWrapper>
      </FailAlertWrapper>
    </>
  );
};

export default FailAlert;
