import React from "react";
import styled from "styled-components/native";
import { Avatar, Card, Text } from "react-native-paper";
import { View, Platform } from "react-native";
import Rating from "./Rating";
import { colors } from "../infrastructure/theme/colors";
import SvgStatus from "../../../components/SvgStatus";
import { Spacer } from "../../../components/Spacer";

const RestaurantCard = styled(Card)`
  background-color: ${({ theme }) => theme.colors.bg.primary};
  margin: 16px;
  border-radius: ${Platform.OS === "ios" ? "16px" : "0"};
  elevation: ${Platform.OS === "android" ? 4 : 0};
  shadow-color: ${Platform.OS === "ios" ? "#000" : "transparent"};
  shadow-offset: ${Platform.OS === "ios" ? "0px 2px" : "0 0"};
  shadow-opacity: ${Platform.OS === "ios" ? 0.1 : 0};
  shadow-radius: ${Platform.OS === "ios" ? "4px" : "0"};
  border-radius: 16px;
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

const StatusContainer = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-left: auto;
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
    id,
    name = "Disfrutar",
    icon,
    photos = [],
    address = "",
    rating = 0,
    isClosedTemporarily = false,
    isOpenNow = true,
  } = restaurant;

  const statusText = isClosedTemporarily
    ? "مغلق مؤقتاً"
    : isOpenNow
    ? "مفتوح الآن"
    : "مغلق";

  return (
    <RestaurantCard mode="elevated" key={id}>
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
        <StatusContainer>
          <SvgStatus isOpen={isOpenNow && !isClosedTemporarily} size={28} />
          <Spacer position="right" size={8} />
          <StatusText isOpen={isOpenNow && !isClosedTemporarily}>
            {statusText}
          </StatusText>
        </StatusContainer>
      </Content>
    </RestaurantCard>
  );
};

export default RestaurantInfoCard;
