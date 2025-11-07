import { Stack } from "expo-router";

const Layout = () => {
  return <Stack
    screenOptions={{
      headerStyle: { backgroundColor: '#ff8c00' },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 40,
        fontWeight: 'bold'
      },
      contentStyle:{
        paadingHorizonal:10,
        paddingTop:10,
        backgroundColor: '#fff'
      }
    }}
  >
    <Stack.Screen name='index' options={{title:"gracias pipo"}}/>
    <Stack.Screen name='notes' option={{headerTitle:'Notes'}}/>
  </Stack>
}

export default Layout;