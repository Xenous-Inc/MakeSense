import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HomeScreen from '@screens/HomeScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [areFontsLoaded] = useFonts({
        OnestMedium: require('@assets/fonts/OnestMedium.ttf'),
        OnestRegular: require('@assets/fonts/OnestRegular.ttf'),
        ExtendedBold: require('@assets/fonts/RFDewiExtendedBold.ttf'),
        DisplayMedium: require('@assets/fonts/SFProDisplayMedium.otf'),
        DisplayRegular: require('@assets/fonts/SFProDisplayRegular.otf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (areFontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [areFontsLoaded]);

    if (!areFontsLoaded) {
        return null;
    }
    return (
        <GestureHandlerRootView style={styles.wrapper} onLayout={onLayoutRootView}>
            <HomeScreen />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});
