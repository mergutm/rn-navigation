import { products } from '@/store/products.store';
import { Redirect, useLocalSearchParams } from 'expo-router';
import React from 'react';
// import { Text, View } from 'react-native'
import { Text, View } from 'react-native';

const ProductScreen = () => {
    // const params = useLocalSearchParams();
    // console.log({ params })

    const { id } = useLocalSearchParams();

    const product = products.find(p => p.id == id);

    if (!product) {
        return <Redirect href='/' />
    }

    return (
        <View className='p-5 mt-4'>
            <Text className='font-work-black text-2xl text-primary'> {product.title}</Text>
            <Text className=''> {product.description}</Text>
            <Text className='font-work-black  text-primary'> {product.price}</Text>
        </View>
    )
}

export default ProductScreen