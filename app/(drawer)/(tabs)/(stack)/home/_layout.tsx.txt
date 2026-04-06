import { Slot } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeLayout = () => {
    return <SafeAreaView>
        <Slot />
    </SafeAreaView>
}

export default HomeLayout