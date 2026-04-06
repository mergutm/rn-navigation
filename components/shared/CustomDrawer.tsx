import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import React from 'react'
import { Text, View } from 'react-native'

const CustomDrawer = (props: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView
            {...props}
            scrollEnabled={true}
        >

            <View className='flex justify-center items-center mx-3 p-5 mb-10 h-[150px] bg-primary rounded-xl'>
                <View className='flex justify-center items-center  bg-white rounded-full h-24 w-24'>
                    <Text className='text-primary text-3xl font-work-black'>MX</Text>
                </View>
            </View>

            <DrawerItemList {...props} />

        </DrawerContentScrollView >
    )
}

export default CustomDrawer