import Ionicons from '@expo/vector-icons/Ionicons';
import { DrawerActions } from '@react-navigation/native';
import { router, Stack, useNavigation } from 'expo-router';
import React from 'react';
// import { Text } from 'react-native';

const StackLayout = () => {

    const navigation = useNavigation();

    const onHeaderLeftClick = (canGoBack: boolean | undefined) => {
        if (canGoBack) {
            //navigation.dispatch(StackActions.pop());
            router.back();
            return;
        }

        navigation.dispatch(DrawerActions.toggleDrawer);
    }

    return (
        <Stack
            screenOptions={{
                headerShown: true,
                headerShadowVisible: true,
                contentStyle: {
                    backgroundColor: 'white'
                },
                // headerLeft: () => <Text>HHHH</Text>

                headerLeft: ({ tintColor, canGoBack }) => (<Ionicons
                    name={canGoBack ? "arrow-back-outline" : "menu"}
                    color={tintColor}
                    size={20}

                    className='mr-3 px-2'
                    onPress={() => onHeaderLeftClick(canGoBack)}
                />)

                // headerRight
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
                // name="settings/index"
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