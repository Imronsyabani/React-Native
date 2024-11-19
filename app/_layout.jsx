import { Stack } from "expo-router";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import "../global.css";

const RootLayout = () => {
    const [loaded, error] = useFonts({
        'Roboto-Black': require('../assets/fonts/Roboto/Roboto-Black.ttf'),
        'Roboto-BlackItalic': require('../assets/fonts/Roboto/Roboto-BlackItalic.ttf'),
        'Roboto-Bold': require('../assets/fonts/Roboto/Roboto-Bold.ttf'),
        'Roboto-BoldItalic': require('../assets/fonts/Roboto/Roboto-BoldItalic.ttf'),
        'Roboto-Italic': require('../assets/fonts/Roboto/Roboto-Italic.ttf'),
        'Roboto-Light': require('../assets/fonts/Roboto/Roboto-Light.ttf'),
        'Roboto-LightItalic': require('../assets/fonts/Roboto/Roboto-LightItalic.ttf'),
        'Roboto-Medium': require('../assets/fonts/Roboto/Roboto-Medium.ttf'),
        'Roboto-MediumItalic': require('../assets/fonts/Roboto/Roboto-MediumItalic.ttf'),
        'Roboto-Regular': require('../assets/fonts/Roboto/Roboto-Regular.ttf'),
        'Roboto-Thin': require('../assets/fonts/Roboto/Roboto-Thin.ttf'),
        'Roboto-ThinItalic': require('../assets/fonts/Roboto/Roboto-ThinItalic.ttf'),
      });
    
      useEffect(() => {
        if (loaded || error) {
          SplashScreen.hideAsync();
        }
      }, [loaded, error]);
    
      if (!loaded && !error) {
        return null;
      }

    return (
        <SafeAreaView style={{flex: 1, width: "auto"}}>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="index"/>
            </Stack>
        </SafeAreaView>
    )
}

export default RootLayout;