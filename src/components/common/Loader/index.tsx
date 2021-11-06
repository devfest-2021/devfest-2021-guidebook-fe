import React from 'react';
import { CSSProperties } from 'react';

import { Loading } from './styled';
export interface LDSLoaderProps {
  size?: number;
  mode?: 'light' | 'dark';
  style?: CSSProperties;
  color?: string;
}
export function Loader({
  size = 30,
  mode = 'light',
  style,
  color,
}: LDSLoaderProps) {
  const loadingColor =
    color || mode === 'light' ? '#b7b7b7' : 'rgba(255,255,255,0.8)';

  return (
    <Loading size={size} style={style}>
      <svg
        className="lds-loader"
        width="30px"
        height="30px"
        viewBox="0 0 30 30"
      >
        <circle
          cx="15"
          cy="15"
          fill="none"
          r="13"
          stroke={loadingColor}
          strokeWidth="2"
          strokeLinecap="round"
          transform="rotate(216.567 15 15)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            calcMode="linear"
            values="0 15 15;320 15 15;720 15 15"
            keyTimes="0;0.5;1"
            dur="1s"
            begin="0s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            calcMode="linear"
            values="0 80; 70 80; 00 80"
            keyTimes="0;0.5;1"
            dur="1"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </Loading>
  );
}
