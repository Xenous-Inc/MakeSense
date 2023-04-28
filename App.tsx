import React, { useCallback } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { TaskCarousel } from '@components/TaskCarousel';

SplashScreen.preventAutoHideAsync();

const tasks = [
    {
        isCompleted: false,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
    {
        isCompleted: false,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
    {
        isCompleted: false,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
    {
        isCompleted: false,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
];

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
            <TaskCarousel tasks={tasks} />
        </GestureHandlerRootView>
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
