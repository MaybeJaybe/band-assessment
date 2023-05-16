import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from 'react-native-vector-icons';
import BandList from './BandList';
import Stats from './Stats';
import Styles from './Styles';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === 'Bands') {
                iconName = focused ? 'musical-notes' : 'musical-notes-outline';
              } else if (route.name === 'Stats') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              } else if (route.name === 'Styles') {
                iconName = focused ? 'star' : 'star-outline';
              }
              return <Ionicons name={iconName} size={size} color={color} />
            },
              tabBarInactiveBackgroundColor: '#000',
              tabBarActiveBackgroundColor: '#111',
              tabBarActiveTintColor: '#f00',
              tabBarInactiveTintColor: '#600',
          })}
          >
          <Tab.Screen name="Bands" component={BandList} />
          <Tab.Screen name="Stats" component={Stats} />
          <Tab.Screen name="Styles" component={Styles} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
  },
});