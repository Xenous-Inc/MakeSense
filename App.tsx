import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Colors } from '@styles/colors';
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
                    title: 'hello',
                    text: 'd;asmd',
                    folder: 'food',
                    time: '12:20',
                }}
                firstBackgroundElementColor={Colors.GRAY}
                secondBackgroundElementColor={Colors.GRAY}
                taskCardColor={Colors.GRAY}
                cardBordersColor={Colors.GRAY}
                cardShadowColor={Colors.GRAY}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
