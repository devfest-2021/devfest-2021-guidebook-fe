import styled from 'styled-components';
import { motion } from 'framer-motion';

export const FilterSection = styled.div``;

export const SessionList = styled(motion.section)`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
`;

export const SessionCard = styled(motion.div)`
  cursor: pointer;
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
  @media screen and (max-width: ${(props) => props.theme.windowSize.tablet}px) {
    min-width: 80%;
    width: 90%;
    margin: 0 20px;
  }
`;

export const TopSection = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const TopTextSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
`;

export const Organizer = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.color.gray350};
`;

export const Logo = styled.img`
  width: 44px;
  height: 44px;
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
  margin-bottom: 24px;
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

export const AttendButton = styled(motion.button)`
  background-color: #55af7a;
  color: white;
  border: 0;
  padding: 5px 12px;
  font-size: 15px;
  border-radius: 6px;
`;
