
# seguir los pasos para instalar nativewind

https://www.nativewind.dev/docs/getting-started/installation#installation-with-expo



## Installation with Expo
```bash
npx expo install nativewind react-native-reanimated react-native-safe-area-context
npx expo install --dev tailwindcss@^3.4.17 prettier-plugin-tailwindcss@^0.5.11 babel-preset-expo
```


## Crear el archivo tailwind.config.js

Run `npx tailwindcss init` to create a tailwind.config.js file



# TABS

Revisar el enlace 
https://docs.expo.dev/router/advanced/tabs/

La base es el siguiente código:

```javascript
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }}
      />
    </Tabs>
  );
}
```

# Icons:

https://icons.expo.fyi/Index



# Menú lateral 

https://docs.expo.dev/router/advanced/drawer/


```bash 
npx expo install @react-navigation/drawer react-native-reanimated react-native-worklets
```