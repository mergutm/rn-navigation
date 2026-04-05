import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { useEffect } from 'react';
import './global.css';

// permite que no avance el SplashScreen hasta que carguen las fuentes
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
    const [fontsLoaded, error] = useFonts({
        'SpaceMono-Bold': require('../assets/fonts/SpaceMono-Bold.ttf'),
        'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
        'WorkSans-Black': require('../assets/fonts/WorkSans-Black.ttf'),
        'WorkSans-Light': require('../assets/fonts/WorkSans-Light.ttf'),
        'WorkSans-Medium': require('../assets/fonts/WorkSans-Medium.ttf')
    });


    useEffect(() => {
        if (error) {
            throw error;
        }

        if (fontsLoaded)
            SplashScreen.hideAsync();


    }, [fontsLoaded, error]);


    if (!fontsLoaded && !error) {
        return null;
    }


    return <Slot />
}

export default RootLayout