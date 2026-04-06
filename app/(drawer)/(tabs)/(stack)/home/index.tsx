import CustomButton from '@/components/shared/CustomButton';
import { DrawerActions } from '@react-navigation/native';
import { Link, router, useNavigation } from 'expo-router';
import { View } from 'react-native';


const HomeScreen = () => {

    const navigation = useNavigation();

    const onToggleDrawer = () => {
        navigation.dispatch(DrawerActions.openDrawer)
    }


    return (

        <View className='px-10 py-5'>

            {/* <Text className='font-work-black '>Home </Text>
            <Link className='my-4' href='/productos'>
                Productos{' '}
            </Link>
            <Link className='my-4' href='/profile'>
                profile{' '}
            </Link>
            <Link className='my-4' href='/settings'>
                settings{' '}
            </Link> */}

            <CustomButton
                className='my-2'
                color='primary'
                // onPress={() => router.push('/productos')}
                // onPress={() => router.push('/tabs/(stack)/productos')}
                onPress={() => router.push('/productos')}
            >Productos</CustomButton>


            <CustomButton
                className='my-2'
                color='secondary'
                //onPress={() => router.push('/settings')}
                //onPress={() => router.push('/drawer/tabs/settings')}
                onPress={() => router.push('/settings')}
            >settings</CustomButton>


            <CustomButton
                className='my-2'
                color='tertiary'
                // onPress={() => router.push('/profile')}
                onPress={() => router.push('/profile')}
            >profile</CustomButton>


            <CustomButton
                className='my-2'
                color='primary'
                variant='text-only'
                // onPress={() => router.push('/settings')}
                // onPress={() => router.push('/drawer/tabs/settings')}
                onPress={() => router.push('/settings')}
            >settings</CustomButton>

            {/* <Link href='/drawer/tabs/(stack)/productos' asChild>
                <CustomButton
                    className='my-2'
                    color='primary' >Productos</CustomButton>
            </Link> */}

            <Link href='/productos' asChild>
                <CustomButton
                    className='my-2'
                    color='primary' >Productos</CustomButton>
            </Link>


            <CustomButton
                onPress={onToggleDrawer}
            >Abrir menú</CustomButton>


        </View>

    )
}

export default HomeScreen
