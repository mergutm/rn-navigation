import { Redirect } from 'expo-router';
import React from 'react';

const index = () => {
    return <Redirect href='/home' />
    // return (
    //     <SafeAreaView>
    //         <View className='mt-10 mx-4'>
    //             <Text
    //                 className='text-2xl font-bold text-blue-700'
    //                 style={{ fontFamily: "SpaceMono-Bold" }}
    //             >
    //                 font-space-bold
    //             </Text>


    //             <Text className='text-2xl font-space-bold text-primary'>
    //                 font-space-bold
    //             </Text>

    //             <Text className='text-2xl font-space-regular text-secondary'>
    //                 font-space-regular
    //             </Text>

    //             <Text className='text-2xl font-space-regular text-secondary-200'>
    //                 font-space-regular
    //             </Text>


    //             <Text className='text-2xl font-work-black text-tertiary'>
    //                 font-work-black
    //             </Text>

    //             <Text className='text-2xl font-work-light text-blue-700'>
    //                 font-work-light
    //             </Text>

    //             <Text className='text-2xl font-work-medium text-secondary-200'>
    //                 font-work-medium
    //             </Text>

    //             <Link href='/productos'>
    //                 Productos
    //             </Link>

    //         </View>
    //     </SafeAreaView>
    // )
}

export default index