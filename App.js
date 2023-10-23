import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Register from './Components/Register';
import Form from './Components/Form';
import ViewDetail from './Components/ViewDetail';
import Login from './Components/Login';
import { NavigationContainer } from '@react-navigation/native';
import TabNav from './Components/TabNav';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from './Components/About'

export default function App() {
  const Stack=createNativeStackNavigator();
  return (
    <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
        <Stack.Screen name="TabNav" component={TabNav} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
   
  },
});
