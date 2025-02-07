import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface HouseIconProps {
  size?: number;
  color?: string;
}

export const HouseIcon = ({ 
  size = 28, 
  color = 'currentColor' 
}: HouseIconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill={color}
    accessibilityRole="image"
  >
    <Path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
  </Svg>
); 