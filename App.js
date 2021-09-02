import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomePage } from './screens/HomePage';
import { DetailPage } from './screens/DetailsPage';

function HomeScreen({ navigation }) {
  return (
    <HomePage navigation={navigation} />
  );
}

function DetailsScreen({ navigation }) {
  return (
    <DetailPage navigation={navigation} />
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}>
        <Stack.Screen name="Home" component={HomeScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

        <Stack.Screen name="Details" component={DetailsScreen}
          options={{
            title: '',
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;