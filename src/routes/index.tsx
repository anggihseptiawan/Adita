import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Home,
  Chat,
  Events,
  EventDetail,
  News,
  NewsDetail,
  About,
  Career,
  CareerDetail,
  Splash,
} from '../pages';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen
        name="Events"
        component={Events}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="News"
        component={News}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Career"
        component={Career}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EventDetail"
        component={EventDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CareerDetail"
        component={CareerDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Routes;
