import { StyleSheet, View, Text } from "react-native";
import { Searchbar } from "react-native-paper";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Platform } from "react-native";

export default function HomeScreen() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Searchbar
          placeholder="Search location"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={styles.searchBar}
          iconColor="#666"
        />
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.text}>List of locations</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
  },
  searchContainer: {
    backgroundColor: "green",
    padding: 10,
  },
  listContainer: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  searchBar: {
    backgroundColor: '#fff',
    borderRadius: 8,
    ...Platform.select({
      android: {
        elevation: 2,
      },
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
    }),
  },
});
