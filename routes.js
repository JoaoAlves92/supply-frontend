import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Login from './src/Screen/Login';
import Home from './src/Screen/Home';
import Cadastro from './src/Screen/Cadastro';
import Carrinho from './src/Screen/Carrinho';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
    return (
      <Tab.Navigator screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#DC3636',
          tabBarStyle: {
              position: 'absolute',
              backgroundColor: '#353535',
              borderRadius: 50,
              marginHorizontal: 15,
              marginBottom: 20,
              height: '7%'
          }
      }}
      >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home-outline" color={color} size={35} />
                )
            }}
            />
        <Tab.Screen
            name="Carrinho"
            component={Carrinho}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="cart-outline" color={color} size={35} />
                )
            }}
            />
        <Tab.Screen
            name="Perfil"
            component={Login}
            options={{
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account-outline" color={color} size={35} />
                )
            }}
            />
      </Tab.Navigator>
    );
}

export default function Routes() {
    return(
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }} 
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Cadastro" component={Cadastro} />
            <Stack.Screen name="App" component={Tabs} />
        </Stack.Navigator>
    );
}