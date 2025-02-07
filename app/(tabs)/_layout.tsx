import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { RestaurantIcon, MapIcon, SettingsIcon } from '@/components/ui/icons';
import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
            borderTopWidth: 0,
          },
          android: {
            elevation: 8,
            borderTopWidth: 0.5,
            borderTopColor: '#eee',
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'المطاعم',
          tabBarIcon: ({ color }) => <RestaurantIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: 'الخريطة',
          tabBarIcon: ({ color }) => <MapIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'الإعدادات',
          tabBarIcon: ({ color }) => <SettingsIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
