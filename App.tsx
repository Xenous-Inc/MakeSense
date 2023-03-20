import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '@styles/colors';

export default function App() {
    return (
        <View style={styles.wrapper}>
            <Text>Open up App.js to start working on your app!</Text>
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
