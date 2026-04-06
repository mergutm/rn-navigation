import Ionicons from '@expo/vector-icons/Ionicons';
import { Drawer } from 'expo-router/drawer';

import CustomDrawer from '@/components/shared/CustomDrawer';
import React from 'react';


const Drawerlayout = () => {
    return (
        <Drawer
            // drawerContent={
            //     () => (
            //         <CustomDrawer />
            //     )
            // }

            drawerContent={CustomDrawer}

            screenOptions={{
                // overlayColor: "#bbf",
                overlayColor: "rgba(0,0,0,0.3)",
                //drawerActiveBackgroundColor: "gray",
                drawerActiveTintColor: "indigo",
                headerShadowVisible: true,
                sceneStyle: {
                    backgroundColor: "rgba(255,255,255,0.8)"
                }
            }}
        >
            <Drawer.Screen
                name="user/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Usuario',
                    title: 'Usuario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='person-circle-outline' color={color} size={size} ></Ionicons>
                    )
                }}


            />
            <Drawer.Screen
                name="schedule/index" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Horario',
                    title: 'Horario',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='time-outline' color={color} size={size} ></Ionicons>
                    )
                }}
            />
        </Drawer>
    )
}

export default Drawerlayout