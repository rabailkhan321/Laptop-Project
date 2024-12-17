import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Laptop Categories',
          tabBarIcon: ({ color }) => <FontAwesome name="laptop" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
