import React from "react";
import styled from 'styled-components/native';
import { Avatar, Card, Text } from 'react-native-paper';
import { View } from 'react-native';
import Rating from './Rating';
import { colors } from '../infrastructure/theme/colors';
const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin: 16px;

`;

const CoverImage = styled(Card.Cover)`
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

const CardHeader = styled(Card.Title)`
  padding: 16px;
`;


const Title = styled.Text`
  color: ${({ theme }) => theme.colors.ui.primary};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.title};
`;

const Address = styled.Text`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ theme }) => theme.colors.ui.secondary};
`;

const StatusText = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.body};
  padding: ${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.fontSizes.caption};
  color: ${({ isOpen }) => (isOpen ? "#2ecc71" : "#e74c3c")};
`;

const Content = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 8px;
  padding: 16px;
`;

const AvatarContainer = styled.View`
  margin-right: ${({ theme }) => theme.space[2]};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Hussein Restaurant",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Main St, Anytown, USA",
    rating = 4.5,
    isClosedTemporarily = false,
    isOpenNow = true,
  } = restaurant;

  const statusText = isClosedTemporarily ? "مغلق مؤقتاً" : isOpenNow ? "مفتوح الآن" : "مغلق";

  return (
    <RestaurantCard mode="elevated">
      <CoverImage source={{ uri: photos[0] }} />
      <CardHeader
        title={<Title>{name}</Title>}
        subtitle={<Address>{address}</Address>}
        left={(props) => (
          <AvatarContainer>
            {icon ? (
              <Avatar.Image {...props} source={{ uri: icon }} />
            ) : (
              <Avatar.Icon {...props} icon="food" />
            )}
          </AvatarContainer>
        )}
        right={(props) => (
          <View {...props}>
            <Rating rating={rating} color={colors.ui.quaternary} size={16} />
          </View>
        )}
      />
      <Content>
        <StatusText isOpen={isOpenNow && !isClosedTemporarily}>
          {statusText}
        </StatusText>
      </Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
