import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./src/navigation/Tabs";
import { setupStore } from "./src/store/store";
import { Provider } from 'react-redux';

const store = setupStore()

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }
});

export default App;
