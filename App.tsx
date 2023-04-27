import React, { useCallback, useState } from 'react';
import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BottomSheetCalendar } from '@components/BottomSheetCalendar';
import { Header } from '@components/Header';

SplashScreen.preventAutoHideAsync();

export default function App() {
    const [areFontsLoaded] = useFonts({
        OnestMedium: require('@assets/fonts/OnestMedium.ttf'),
        OnestRegular: require('@assets/fonts/OnestRegular.ttf'),
        ExtendedBold: require('@assets/fonts/RFDewiExtendedBold.ttf'),
        DisplayMedium: require('@assets/fonts/SFProDisplayMedium.otf'),
        DisplayRegular: require('@assets/fonts/SFProDisplayRegular.otf'),
    });
    //a
    const [isButtomSheetOpened, setIsButtomSheetOpened] = useState<boolean>(false);

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
            <Header onCalendarClick={() => setIsButtomSheetOpened(current => !current)} />
            <BottomSheetCalendar indexPos={isButtomSheetOpened} />
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        backgroundColor: 'gray',
        flex: 1,
        justifyContent: 'flex-start',
    },
});
