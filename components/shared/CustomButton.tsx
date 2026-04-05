import { Pressable, PressableProps, Text } from 'react-native';


// Interface v0
// interface Props {
//     children: string;
// }

// Se usa herencia para poder usar todos los métodos de Pressable
interface Props extends PressableProps {
    children: string;
    color?: "primary" | "secondary" | "tertiary";
    variant?: 'contained' | 'text-only';
    className?: string;
}

const CustomButton = ({ children,
    color = 'primary',
    onPress,
    onLongPress,
    variant = 'contained',
    className,
}: Props) => {

    const btnColor = {
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        tertiary: 'bg-tertiary'
    }[color];


    const textColor = {
        primary: 'text-primary',
        secondary: 'text-secondary',
        tertiary: 'text-tertiary'
    }[color];



    if (variant === 'text-only') {

        return (
            <Pressable
                onPress={onPress}
                onLongPress={onLongPress}
                className={`p-3  ${className}`}
            >
                <Text className={`text-center ${textColor} font-work-medium`}>{children}</Text>
            </Pressable>
        )

    }

    return (
        <Pressable
            onPress={onPress}
            onLongPress={onLongPress}
            className={`p-3 rounded-xl ${btnColor} active:opacity-70 ${className}`}
        >
            <Text className='text-white text-center font-work-medium'>{children}</Text>
        </Pressable>
    )
}


// const CustomButton = React.forwardRef(({ children,
//     color = 'primary',
//     onPress,
//     onLongPress
// }: Props, ref: React.Ref<View>) => {

//     const btnColor = {
//         primary: 'bg-primary',
//         secondary: 'bg-secondary',
//         tertiary: 'bg-tertiary'
//     }[color];

//     return (
//         <Pressable
//             onPress={onPress}
//             onLongPress={onLongPress}
//             className={`my-1 p-3 rounded-xl ${btnColor} active:opacity-70`}
//             ref={ref}
//         >
//             <Text className='text-white text-center'>{children}</Text>
//         </Pressable>
//     )
// });





export default CustomButton