import React from 'react';

export const Check = ({ color, width, height, style }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
    >
      <path
        d="M13 5L6.125 12L3 8.81818"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

Check.defaultProps = {
  color: 'black',
  width: '16',
  height: '16',
};
