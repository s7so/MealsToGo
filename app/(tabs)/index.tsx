import { Image, StyleSheet, Platform, View, Text, StatusBar } from 'react-native';


import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Text style={styles.text}>Search for a location</Text>
      </View>

      <View style={styles.listContainer}>
        <Text style={styles.text}>List of locations</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    
  },
  searchContainer: {
    backgroundColor: 'green',
    padding: 10,
  },
  listContainer: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
}); 
