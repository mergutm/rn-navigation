import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: 'blue',
            tabBarShowLabel: true,
            headerShown: false,
            // tabBarStyle: {
            //     backgroundColor: 'black'
            // },
            // tabBarActiveBackgroundColor: "red"

        }}>
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />
            <Tabs.Screen
                name="favorites/index"
                options={{
                    title: 'Settings',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Stack',
                    tabBarIcon: ({ color }) => <AntDesign name="apple" size={28} color={color} />,

                }}
            />
        </Tabs>
    );
}