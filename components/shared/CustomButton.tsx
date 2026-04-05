import React from 'react';
import { Pressable, PressableProps, Text } from 'react-native';

// interface Props {
//     children: string;
// }

interface Props extends PressableProps {
    children: string;
    color?: "primary" | "secondary" | "tertiary"
}

const CustomButton = ({ children,
    color = 'primary',
    onPress,
    onLongPress
}: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color];

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            className={`my-2 p-3 rounded-xl ${btnColor} active:opacity-70`}
        >
            <Text className='text-white text-center'>{children}</Text>
        </Pressable>
    )
}

export default CustomButton