import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Colors } from '@styles/colors';

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

    return <View style={styles.wrapper} onLayout={onLayoutRootView} />;
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
