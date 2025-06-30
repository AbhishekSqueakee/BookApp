/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./navigation/AppNavigator.tsx";
import {Provider} from "react-redux";
import store from "./store/store.ts";

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle= {isDarkMode ? 'dark-content' : "light-content"}/>
          <AppNavigator/>
      </NavigationContainer>
    </Provider>
  );
}


export default App;
