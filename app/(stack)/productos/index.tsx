import { products } from '@/store/products.store'
import React from 'react'
import { FlatList, Text, View } from 'react-native'



const ProductsScreen = () => {
    return (

        <View className='flex flex-1'>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <Text>{item.title}</Text>
                }
            />
        </View>

    )
}

export default ProductsScreen