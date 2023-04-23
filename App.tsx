import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { TaskCard } from '@components/TaskCard';

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
        <View style={styles.wrapper} onLayout={onLayoutRootView}>
            <TaskCard
                task={{
                    isCompleted: false,
                    title: 'Pack for the trip',
                    text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
                    folder: 'Journeys',
                    time: '21:30',
                }}
                color={'#50C3FF'}
            />
            <TaskCard
                task={{
                    isCompleted: false,
                    title: 'Pack for the trip',
                    text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
                    folder: 'Journeys',
                    time: '21:30',
                }}
                color={'#5CFF63'}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 48,
        padding: 16,
    },
});
