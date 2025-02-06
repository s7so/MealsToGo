
import { useFonts, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { Lato_400Regular } from '@expo-google-fonts/lato';
import { RestaurantsScreen } from "../features/restaurants/screens/restaurants.screen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from "styled-components/native";
import { theme } from "../features/restaurants/infrastructure/theme";

export default function HomeScreen() {
  const [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <RestaurantsScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}


