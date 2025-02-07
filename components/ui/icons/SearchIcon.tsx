import React from 'react';
import Svg, { Path } from 'react-native-svg';

export const SearchIcon = ({ size = 28, color = '#000' }) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
    <Path d="M10 2a8 8 0 0 1 6.32 12.906l5.387 5.387-1.414 1.414-5.387-5.387A8 8 0 1 1 10 2zm0 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"/>
  </Svg>
); 