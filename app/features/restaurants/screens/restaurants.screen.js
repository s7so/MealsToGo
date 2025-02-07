import React, { useState } from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const Container = styled(SafeAreaView)`
  flex: 1;
  padding-top: ${Platform.OS === "android" ? "25px" : "0"};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

const SearchContainer = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;

const ListContainer = styled.View`
  flex: 1;
  padding: ${({ theme }) => theme.space[3]};
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const restaurants = [
    {
      id: 1,
      name: "مطعم اللوتس",
      rating: 4.5,
      address: "المعادي، القاهرة",
      photos: [
        "https://www.theworlds50best.com/filestore/W50BR24/Disfrutar-dish-alt%20W50BR24%20profile.jpg",
      ],
      icon: "https://www.theworlds50best.com/filestore/jpg/Kaviari%20Logo%20Cropped%20Size.jpg",
      reviewsCount: 235,
      cuisine: "مأكولات بحرية",
      isOpenNow: true,
    },
    {
      id: 2,
      name: "مطعم الذواقة",
      rating: 3.8,
      address: "مدينة نصر، القاهرة",
      photos: [
        "https://www.theworlds50best.com/filestore/W50BR24/Quintonil-dish%20-W50BR24%20profile.jpg",
      ],
      icon: "https://www.theworlds50best.com/filestore/jpg/Illy-logo-world-tier3.jpg",
      reviewsCount: 184,
      cuisine: "مأكولات عالمية",
      isOpenNow: false,
    },
    // ... المزيد من المطاعم
  ];

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Container>
      <SearchContainer>
        <Searchbar
          placeholder="ابحث عن مطعم"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </SearchContainer>
      <ListContainer>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          initialNumToRender={10}
          contentContainerStyle={{ padding: 0 }}
        />
      </ListContainer>
    </Container>
  );
};

export default RestaurantsScreen;
