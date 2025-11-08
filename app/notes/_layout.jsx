import { Stack } from 'expo-router';

const noteLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ title: 'Detalles' }} />
    </Stack>
  );
};

export default noteLayout;