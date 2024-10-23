import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack  screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="home"  />
    <Stack.Screen name="exercises" options={{
      presentation:'fullScreenModal'
    }}/>
     <Stack.Screen name="exerciseDetail" options={{
      presentation:'modal'  ,animation:"fade_from_bottom"
    }}/>
    </Stack>
  );
}
