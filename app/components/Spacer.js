import React from 'react';
import styled from 'styled-components/native';

const SpacerView = styled.View`
  margin: ${({ position, size }) => {
    switch (position) {
      case 'left':
        return `0 0 0 ${size}px`;
      case 'right':
        return `0 ${size}px 0 0`;
      case 'top':
        return `${size}px 0 0`;
      case 'bottom':
        return `0 0 ${size}px`;
      default:
        return `${size}px`;
    }
  }};
`;

export const Spacer = ({ position = 'horizontal', size = 16 }) => (
  <SpacerView position={position} size={size} />
);

export default Spacer; 