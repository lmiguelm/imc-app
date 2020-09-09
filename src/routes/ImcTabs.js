import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'


import Imc from '../pages/Imc';
import About from '../pages/About';

const { Navigator, Screen } = createBottomTabNavigator();

export default function ImcTabs() {
    return(
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 55,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Roboto_700Bold',
                    fontSize: 13,
                    marginLeft: 10,
                },
                // inactiveBackgroundColor: '#FAFAFC',
                // activeBackgroundColor: '#EBEBF5',
                // inactiveTintColor: '#C1BCCC',
                // activeTintColor: '#32264D',

                inactiveBackgroundColor: '#9871F5',
                activeBackgroundColor: '#6842C2',
                inactiveTintColor: '#fff',
                activeTintColor: '#24EF7F',
            }}
        >
            <Screen 
                name="Imc" 
                component={ Imc }
                options={{
                    tabBarLabel: 'Imc',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <FontAwesome name="heartbeat" size={24} color={ focused ? '#24EF7F' : color} />
                        );
                    }
                }} 
            />

            <Screen 
                name="About"
                component={ About } 
                options={{
                    tabBarLabel: 'Informações',
                    tabBarIcon: ({ color, size, focused }) => {
                        return(
                            <MaterialIcons name="info" size={24} color={ focused ? '#24EF7F' : color} />
                        );
                    }
                }}
            />
        </Navigator>
    );
}