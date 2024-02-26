import './constants/firebase'
import { StatusBar } from 'expo-status-bar';
import Banner from './components/Banner';
import Home from './screens/Home';
import Settings from './screens/Settings'
import TopBar from './components/TopBar'
import Colors from './constants/colors';
import { View, SafeAreaView } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import { useFonts, Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useCustomContext } from './state/context';

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarStyle: { backgroundColor: '#222' }, // Styling for the entire tab bar
  tabBarActiveTintColor: Colors.aqua, // Color for active tab
  tabBarInactiveTintColor: '#bbb', // Color for inactive tabs
  headerShown: false
};
export default function App() {

  const { user } = useCustomContext()

  let [fontsLoaded, fontError] = useFonts({
    Lato_400Regular,
    Lato_700Bold
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const Tabs = () => {
    return (

      <Tab.Navigator initialRouteName='Home' screenOptions={screenOptions}>
       
        <Tab.Screen name="Home" component={Home} options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          )
        }} />

        <Tab.Screen name="Settings" component={Settings} options={{
          title: "Docs/Settings",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="setting" color={color} size={size} />
          )
        }} />
      </Tab.Navigator>
    )
  }
  return (
    <View style={{ flex: 1, paddingTop: 0, backgroundColor: '#222' }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Banner />
        <TopBar />
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar />
    </View>
  );

}

