import styled from 'styled-components';

export const FilterSection = styled.div``;

export const SessionList = styled.section`
  margin-top: 100px;
  display: flex;
  flex-wrap: wrap;
`;

export const SessionCard = styled.div`
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
