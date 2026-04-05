import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import { View } from 'react-native'


const HomeScreen = () => {
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
                color='primary'
                onPress={() => router.push('/productos')}
            >Productos</CustomButton>

            <Link href='/productos' asChild>
                <CustomButton color='primary' >Productos</CustomButton>
            </Link>

        </View>

    )
}

export default HomeScreen