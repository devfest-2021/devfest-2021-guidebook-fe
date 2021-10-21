import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FilterSection = styled.div``;

export const SessionList = styled.section`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
`;

export const SessionCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  padding: 0 32px;
  margin-bottom: 84px;
  box-sizing: border-box;
  @media screen and (max-width: ${(props) => props.theme.windowSize.desk}px) {
    min-width: 50%;
    width: 50%;
  }
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    min-width: 100%;
    width: 100%;
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 50%;
  width: 100%;
  will-change: opacity;
  transform: translateX(-50%);
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.5s ease;
`;

export const ModalWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  will-change: opacity;
  background: rgba(0, 0, 0, 0.3);
  transition: background 0.5s ease;
  z-index: 999;
`;

export const Modal = styled(motion.div)`
  border: 1px solid ${(props) => props.theme.color.gray350};
  width: 440px;
  overflow: hidden;
  padding: 60px 0;
  z-index: 1000;
  background-color: white;
  border-radius: 12px;
  padding: 32px;
  box-sizing: border-box;
`;

export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  align-items: end;
`;

export const Logo = styled.img`
  width: 44px;
  height: 44px;
  position: relative;
  top: -10px;
  border-radius: 50%;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
`;

export const CardContent = styled.p`
  font-weight: 500;
  font-size: 500;
  color: #555;
  margin-bottom: 20px;
`;

export const CardContentInModal = styled(CardContent)`
  margin-bottom: 28px;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DateSection = styled.div``;

export const DateSpan = styled.span`
  background-color: #f5f5f5;
  color: #959595;
  padding: 5px 12px;
  font-size: 15px;
  border-radius: 6px;
  font-weight: 400;
`;

export const AttendButton = styled.button`
  background-color: #55af7a;
  color: white;
  border: 0;
  padding: 5px 12px;
  font-size: 15px;
  border-radius: 6px;
`;
