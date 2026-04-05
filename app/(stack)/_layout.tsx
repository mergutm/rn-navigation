import { Stack } from 'expo-router';
import React from 'react';

const StackLayout = () => {
    return (
        <Stack
            screenOptions={{
                // headerShown: false
                headerShadowVisible: true,
                contentStyle: {
                    backgroundColor: 'white'
                }
            }}
        >

            <Stack.Screen
                name="productos/[id]"
                options={{
                    title: "Detalles del producto",
                    animation: 'fade_from_bottom'
                }}
            />

            <Stack.Screen
                name="home/index"
                options={{
                    title: "Pantalla inicial",
                    animation: 'fade_from_bottom'
                }}

            />
            <Stack.Screen
                name="profile/index"
                options={{
                    title: "Perfil",
                    animation: 'fade_from_bottom'
                }}

            />

            <Stack.Screen
                name="productos/index"
                options={{
                    title: "Productos",
                    animation: 'fade_from_bottom'
                }}

            />


            <Stack.Screen
                name="settings/index"
                options={{
                    title: "Configuración",
                    animation: 'fade_from_bottom'
                }}
            />


        </Stack>
    );
}

export default StackLayout