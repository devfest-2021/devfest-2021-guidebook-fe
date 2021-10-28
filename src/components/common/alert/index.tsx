import React from 'react';
import SuccessAlert from './LoginSuccessAlert';
import FailAlert from './FailedAlert';
import { useRecoilState } from 'recoil';
import { alertState } from '../../../store/alert';
import { StyledAlert } from './styled';

const Alert = () => {
  const [alert] = useRecoilState(alertState);
  return (
    <StyledAlert>
      {alert.success && <SuccessAlert />}
      {alert.fail && <FailAlert />}
    </StyledAlert>
  );
};

export default Alert;
