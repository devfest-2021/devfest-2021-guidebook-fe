import styled from 'styled-components';

export interface LoadingProps {
  size: number;
}
export const Loading = styled.div<LoadingProps>`
  position: absolute;
  top: calc(50% - ${(props) => props.size / 2}px);
  left: calc(50% - ${(props) => props.size / 2}px);
  display: inline-block;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;
  box-sizing: border-box;
  z-index: 100;
  svg {
    width: 100%;
    height: 100%;
  }
`;
