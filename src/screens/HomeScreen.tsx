import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { TaskCard } from '@components/TaskCard';
import { Colors } from '@styles/colors';
import { Header } from '@components/Header';

const imageButton = {
    voiceOutLine: require('@assets/icons/voice_outline_24.png'),
    iconPlus: require('@assets/icons/add_24.png'),
    iconMenu: require('@assets/icons/menu-icon.png'),
    iconCalendar: require('@assets/icons/calendar-icon.png'),
};

const HomeScreen: React.FC = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.wrapper__header}>
                <Header />
            </View>
            <TaskCard
                task={{
                    isCompleted: false,
                    title: 'Pack for the trip',
                    text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
                    folder: 'Journeys',
                    time: '21:30',
                }}
                color={'#50C3FF'}
            />
            <TaskCard
                task={{
                    isCompleted: false,
                    title: 'Pack for the trip',
                    text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
                    folder: 'Journeys',
                    time: '21:30',
                }}
                color={'#5CFF63'}
            />
            <View style={styles.wrapper__content}>
                <TouchableOpacity style={styles.content__plusButton}>
                    <Image style={styles.img} source={imageButton.voiceOutLine} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.content__voiceButton}>
                    <Image style={styles.img} source={imageButton.iconPlus} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    wrapper__content: {
        width: '100%',
        height: '200%',
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '90%',
    },
    wrapper__header: {
        width: '100%',
        height: '10%',
        marginTop: '10%',
    },
    content__plusButton: {
        backgroundColor: Colors.BLACK,
        borderRadius: 100,
        width: '30%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        right: 8,
    },
    content__voiceButton: {
        backgroundColor: Colors.BLACK,
        borderRadius: 100,
        left: 8,
        width: '30%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: 36,
        height: 36,
    },
});

export default HomeScreen;
