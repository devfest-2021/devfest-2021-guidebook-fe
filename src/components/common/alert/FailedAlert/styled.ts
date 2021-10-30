import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledImage = styled.svg`
  fill: white;
`;
const FailImage = styled.div`
  display: flex;
  align-items: center;
  width: 30px;
  color: white;
`;
const FailAlertInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  background: #f44336;
  padding: 7px 15px;
  border-radius: 8px;
`;
const FailAlertText = styled.div`
  font-size: 18px;
  margin-left: 5px;
  color: white;
  display: flex;
  align-items: center;
`;
const FailAlertWrapper = styled(motion.div)`
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
  FailAlertInnerWrapper,
  FailAlertText,
  FailAlertWrapper,
  FailImage,
};
