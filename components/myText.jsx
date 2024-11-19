import { Text } from "react-native";

const MyText = ({children, style, ...args}) => {
    return (
        <Text style={{fontFamily: "Roboto-Medium", ...style}} {...args}>
            {children}
        </Text>
    )
}

export default MyText;