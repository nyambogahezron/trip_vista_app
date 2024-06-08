import { Stack } from 'expo-router';
import { View, Text } from 'react-native';
const TabsLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen name='home' options={{ headerShown: false }} />
        <Stack.Screen name='explore' options={{ headerShown: false }} />
        <Stack.Screen name='Favorite' options={{ headerShown: false }} />
        <Stack.Screen name='Profile' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};
export default TabsLayout;
