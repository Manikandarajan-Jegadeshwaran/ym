import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from "react-redux";
import Store from '~/store'
import { StyleSheet, Text, View } from 'react-native';
import Login from '~/features/login'

export default function App() {
  return (
    <Provider store={Store}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <StatusBar style="auto" />
        <Login />
      </View>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
