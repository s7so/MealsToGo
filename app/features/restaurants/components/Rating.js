import React from 'react';
import SvgStar from '../../../components/SvgStar';
import styled from 'styled-components/native';
import { colors } from '../infrastructure/theme/colors';


const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;

`;

const Rating = ({ rating, color = colors.ui.quaternary }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;


  return (
    <RatingContainer>
      {[...Array(fullStars)].map((_, i) => (
        <SvgStar key={`full-${i}`} color={color} size={16} />
      ))}
      {hasHalfStar && <SvgStar filled={false} color={color} size={16} />}


      {[...Array(5 - Math.ceil(rating))].map((_, i) => (
        <SvgStar key={`empty-${i}`} filled={false} color={color} size={16} />
      ))}
    </RatingContainer>


  );
};

export default Rating; 