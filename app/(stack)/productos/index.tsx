import { products } from '@/store/products.store'
import { Link } from 'expo-router'
import React from 'react'
import { FlatList, Text, View } from 'react-native'



const ProductsScreen = () => {
    return (

        // <View className='flex flex-1'>
        //     <FlatList
        //         data={products}
        //         keyExtractor={(item) => item.id}
        //         renderItem={({ item }) => <Text>{item.title}</Text>
        //         }
        //     />
        // </View>

        <View className='flex flex-1'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View className='mt-5 px-5 py-3'>
                        <Text className='text-2xl font-space-bold text-primary' >{item.title}</Text>
                        <Text className='font-work-medium' >{item.description}</Text>

                        <View className='flex flex-row justify-between mt-2'>
                            <Text className='font-work-black' >{item.price}</Text>
                            <Link href={`/(stack)/productos/${item.id}`} className='text-primary' >Ver detalles</Link>
                        </View>
                    </View>
                )
                }
            />
        </View>

    )
}

export default ProductsScreen