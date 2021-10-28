import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledImage = styled.svg`
  fill: white;
`;
const SuccessImage = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  color: white;
`;
const SuccessAlertInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #55af7a;
  padding: 7px 15px;
  border-radius: 8px;
`;
const SuccessAlertText = styled.div`
  font-size: 18px;
  margin-left: 5px;
  color: white;
  display: flex;
  align-items: center;
`;
const SuccessAlertWrapper = styled(motion.div)`
  position: sticky;
  top: 100px;
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1;

  & :hover {
    cursor: default;
  }
`;

export {
  StyledImage,
  SuccessAlertInnerWrapper,
  SuccessAlertText,
  SuccessAlertWrapper,
  SuccessImage,
};
