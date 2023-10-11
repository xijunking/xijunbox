/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import ChatList from './app/ChatList';
import ChatDetails from './app/ChatDetails';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };



  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ChatList" component={ChatList} />
        <Stack.Screen name="ChatDetails" component={ChatDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
