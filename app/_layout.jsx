import { Stack } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import "../global.css";
const RootLayout = () => {
    return (
        <SafeAreaView style={{flex: 1, width: "auto"}}>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index"/>
            </Stack>
        </SafeAreaView>
    )
}

export default RootLayout;