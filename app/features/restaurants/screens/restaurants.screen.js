import React, { useState } from "react";
import styled from 'styled-components/native';
import { Searchbar } from "react-native-paper";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === 'android' ? '25px' : '0'};
`;

const SearchContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.bg.quaternary};
  padding: ${({ theme }) => theme.space[3]};
`;

const SearchBar = styled(Searchbar)`
  background-color: #ffffff;
  border-radius: 50px;
`;

const ListContainer = styled.View`
  flex: 1;
  background-color: white;
  padding: 10px;
`;

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Container edges={['top', 'bottom']}>
      <SearchContainer>
        <SearchBar 
          placeholder="Search location"
          onChangeText={setSearchQuery}
          value={searchQuery}
          iconColor="black"
        />
      </SearchContainer>

      <ListContainer>
        <RestaurantInfoCard />
      </ListContainer>
    </Container>
  );
};

export default RestaurantsScreen;
