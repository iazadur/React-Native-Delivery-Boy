import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Orders from './Orders';
import Confirm from './Confirm';
import Finished from './Finished';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen() {
    return (
            <Tab.Navigator>
                <Tab.Screen name="All Orders" component={Orders} />
                <Tab.Screen name="Confirm" component={Confirm} />
                <Tab.Screen name="Delivered" component={Finished} />
            </Tab.Navigator>

    )
}
