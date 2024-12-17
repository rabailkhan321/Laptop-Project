import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen 
        name="[name]" 
        options={({ route }) => ({
          title: route.params?.name,
        })}
      />
    </Stack>
  );
} 