import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, useColorScheme } from 'react-native';
import Login from './src/screens/Login';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import BottomBar from './src/navigations/BottomBar';
import AddTest from './src/screens/AddTest';
import StudentList from './src/screens/StudentList';
import HomeWorkList from './src/screens/HomeworkList';
import AddHomework from './src/screens/AddHomework';
import Annoucement from './src/screens/Annoucement/Annoucement';
import AddAnnoucement from './src/screens/AddAnnoucement/AddAnnoucement';

const Stack = createNativeStackNavigator();

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{title: 'Login'}}/>
        <Stack.Screen name="BottomBar" component={BottomBar} options={{title: 'BottomBar'}}/>
        <Stack.Screen name="AddTest" component={AddTest} options={{title: 'AddTest'}}/>
        <Stack.Screen name="StudentList" component={StudentList} options={{title: 'StudentList'}}/>
        <Stack.Screen name="HomeWorkList" component={HomeWorkList} options={{title: 'HomeWorkList'}}/>
        <Stack.Screen name="AddHomework" component={AddHomework} options={{title: 'AddHomework'}}/>
        <Stack.Screen name="Annoucement" component={Annoucement} options={{ title: 'Annoucement' }} />
        <Stack.Screen name="AddAnnoucement" component={AddAnnoucement} options={{ title: 'AddAnnoucement' }} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
