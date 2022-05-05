import React, {useEffect, useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Camera from './screens/Camera';
import Home from './screens/Home';
import {Button} from 'react-native';
import AddButton from './AddButton';
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  const Stack = createNativeStackNavigator();
  useEffect(() => {
    SplashScreen.hide();
  }, [])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' 
        screenOptions={{
            headerStyle: {
              backgroundColor: '#02ab56'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
        }}>
      <Stack.Screen
          name="Home"
          
          component={Home}
          options={{
            title: "Home",
            headerTitle: "Text Recognition Demo",
            headerRight: () => (
              <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#000"
              />
            ),
            headerLeft: () => (
              <AddButton
              />
            ),
          }}
          
        />  
        <Stack.Screen
          name="Camera"
          component={Camera}
          options={{
            title: "Camera",
            headerTitle: "Scan eartag number"
          }} 
        />

  
      </Stack.Navigator>
    </NavigationContainer>
  );
}
