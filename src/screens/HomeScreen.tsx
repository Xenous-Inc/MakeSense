import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { Colors } from '@styles/colors';
import { Header } from '@components/atoms/Header';
import { BottomSheetCalendar } from '@components/molecules/BottomSheetCalendar';
import { TaskCarousel } from '@components/molecules/TaskCarousel';
import { MONTHS } from '@utils/constants';
import { PlanCard } from '@components/molecules/PlanCard';

const imageButton = {
    voiceOutline: require('@assets/icons/voice_outline_24.png'),
    iconPlus: require('@assets/icons/add_24.png'),
    iconMenu: require('@assets/icons/menu-icon.png'),
    iconCalendar: require('@assets/icons/calendar-icon.png'),
    notMarkedIcon: require('@assets/icons/not-marked-icon.png'),
    markedIcon: require('@assets/icons/marked-icon.png'),
};
const tasks = [
    {
        isCompleted: true,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
    {
        isCompleted: true,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
    {
        isCompleted: true,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
    {
        isCompleted: true,
        title: 'Pack for the trip',
        text: 'Don’t wait until the last minute! There are a lot of items to pack. Tap to see the list',
        folder: 'Journeys',
        time: '21:30',
    },
];

const HomeScreen: React.FC = () => {
    const date = new Date();
    const monthName = MONTHS[date.getMonth()].toLowerCase();
    const [isButtomSheetOpened, setIsButtomSheetOpened] = useState<boolean>(false);
    return (
        <View style={styles.content}>
            <View style={styles.content__header}>
                <Header onCalendarClick={() => setIsButtomSheetOpened(true)} />
            </View>
            <TaskCarousel tasks={tasks} />
            <View style={styles.content__date}>
                <Text style={styles.date__today}>Today</Text>
                <Text style={styles.date__dayAndMonth}>
                    {'   '}
                    {date.getDate()} {monthName}
                </Text>
            </View>
            <View style={styles.content__planCard}>
                <PlanCard />
            </View>
            <View style={styles.content__buttons}>
                <TouchableOpacity style={styles.button__plusButton}>
                    <Image style={styles.buttons__img} source={imageButton.iconPlus} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button__voiceButton}>
                    <Image style={styles.buttons__img} source={imageButton.voiceOutline} />
                </TouchableOpacity>
            </View>
            <BottomSheetCalendar
                isBottomSheetOpen={isButtomSheetOpened}
                setIsBottomSheetOpen={setIsButtomSheetOpened}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    content__header: {
        width: '90%',
        marginTop: '10%',
        marginLeft: '5%',
    },

    content__date: {
        flexDirection: 'row',
        fontFamily: 'OnestRegular',
        marginLeft: '7%',
        fontSize: 16,
        bottom: '155%',
    },
    date__today: {
        fontFamily: 'OnestRegular',
        fontSize: 16,
    },
    date__dayAndMonth: {
        opacity: 0.5,
        fontFamily: 'OnestRegular',
        fontSize: 16,
    },
    content__planCard: {
        bottom: '68%',
        left: '5%',
    },
    buttons__img: {
        tintColor: Colors.WHITE,
        width: 36,
        height: 36,
    },
    content__buttons: {
        width: '100%',
        height: '200%',
        flex: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '190%',
        position: 'absolute',
    },
    button__voiceButton: {
        backgroundColor: Colors.BLACK,
        borderRadius: 100,
        width: '29%',
        height: '3.5%',
        justifyContent: 'center',
        alignItems: 'center',
        left: '1%',
    },
    button__plusButton: {
        backgroundColor: Colors.BLACK,
        borderRadius: 100,
        width: '29%',
        height: '3.5%',
        justifyContent: 'center',
        alignItems: 'center',
        right: '1%',
    },
});

export default HomeScreen;
