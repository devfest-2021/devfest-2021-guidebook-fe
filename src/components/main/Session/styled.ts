import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

export const FilterSection = styled.div``;

export const List = styled(motion.section)`
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

export const TopSection = styled(motion.div)`
  display: flex;
  margin-bottom: 10px;
`;

export const TopTextSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 12px;
  height: 73px;
`;

export const Organizer = styled.span`
  font-size: 13px;
  color: ${(props) => props.theme.color.gray350};
`;

export const SmallLogo = styled.img`
  height: 20px;
`;

export const Logo = styled(motion.img)`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: white;
  border-color: white;
`;

export const CardTitleSection = styled.div`
  display: flex;
  align-items: center;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-right: 8px;
`;

export const CardContent = styled(motion.p)`
  font-weight: 500;
  font-size: 15px;
  color: #555;
  margin-bottom: 24px;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 1.5em;
  max-height: 4.5em;
  min-height: 4.5em;
  overflow: hidden;
`;

export const CardContentInModal = styled(CardContent)`
  margin-bottom: 28px;
  max-height: 10em;
  -webkit-line-clamp: 6;
`;

export const BottomSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LikeContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LikeButtonWrapper = styled.div`
  margin-top: 8px;
  height: 30px;
  display: flex;
  align-items: center;
`;

export const LikeButton = styled(motion.img)`
  width: 24px;
  height: 24px;
  padding-right: 4px;
  outline: none;
  border: none;
`;

export const Count = styled.p`
  font-size: 16px;
  padding-top: 8px;
  color: #55af7a;
`;

export const ChipSection = styled(motion.div)`
  overflow: scroll;
  white-space: nowrap;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chip = styled.span`
  background-color: #f5f5f5;
  color: #959595;
  padding: 5px 12px;
  font-size: 15px;
  border-radius: 6px;
  font-weight: 400;
  display: inline-block;
  margin-right: 8px;
`;

export const AttendButton = styled(motion.button)`
  background-color: #55af7a;
  color: white;
  border: 0;
  padding: 5px 12px;
  font-size: 15px;
  border-radius: 6px;
`;

export const LottieContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LottieWrapper = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 9999;

  @media (min-width: ${(props) => props.theme.windowSize.desk}px) {
    width: 50%;
  }
`;

export const BigFloatingReactionItemContainer = styled(motion.div)`
  position: fixed;
  top: 100%;
  left: 30%;
  pointer-events: none;
`;

export const FloatingTrackContainer = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0;
  width: 150px;
  z-index: 100;
`;

export const floatingAnimation = keyframes`
  0% {
    bottom: -100px;
    opacity: 1;
    visibility: visible;
  }
  60% {
    opacity: 1;
  }
  100% {
    bottom: 90vh;
    opacity: 0;
    visibility: hidden;
  }
`;
export const FloatingReactionItemContainer = styled.div<{ xPos: number }>`
  position: absolute;
  pointer-events: none;
  width: 40px;
  height: 40px;
  bottom: -100px;
  left: ${({ xPos }) => `${xPos}px`};
  visibility: hidden;
  animation: ${floatingAnimation} 8s ease-out;
`;
