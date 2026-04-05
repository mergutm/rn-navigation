import React from 'react'
import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const index = () => {
    return (
        <SafeAreaView>
            <View className='mt-10 mx-4'>
                <Text
                    className='text-2xl font-bold text-blue-700'
                    style={{ fontFamily: "SpaceMono-Bold" }}
                >
                    font-space-bold
                </Text>


                <Text className='text-2xl font-space-bold text-blue-700'>
                    font-space-bold
                </Text>

                <Text className='text-2xl font-space-regular text-blue-700'>
                    font-space-regular
                </Text>


                <Text className='text-2xl font-work-black text-blue-700'>
                    font-work-black
                </Text>

                <Text className='text-2xl font-work-light text-blue-700'>
                    font-work-light
                </Text>

                <Text className='text-2xl font-work-medium text-blue-700'>
                    font-work-medium
                </Text>

            </View>
        </SafeAreaView>
    )
}

export default index