import React, { Dispatch, SetStateAction } from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';
import { CalendarHeaderProps } from 'react-native-calendars/src/calendar/header';
import { MONTHS, WEEKDAYS } from '@utils/constants';
import { Colors } from '@styles/colors';

export interface ICalendarHeaderProps extends CalendarHeaderProps {
    isBottomSheetOpen: boolean;
    setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
}

const CalendarHeader: React.FC<ICalendarHeaderProps> = props => {
    const { month, addMonth, theme, isBottomSheetOpen, setIsBottomSheetOpen } = props;

    const currentMonth = month?.getMonth() || 0;

    /*useEffect(() => {
        if (isBottomSheetOpen) bottomSheetRef.current?.snapToIndex(0);
    }, [isBottomSheetOpen]);*/

    //const style = useRef(styleConstructor(theme));
    return (
        //
        <>
            <View style={styles.content}>
                <View style={styles.content__date}>
                    <Text style={styles.date__textDate}>
                        {MONTHS[currentMonth]} {month?.getFullYear()}
                    </Text>
                    <Pressable onPress={() => addMonth?.(-1)}>
                        <Image
                            style={styles.date__img}
                            source={require('@assets/icons/calendar-arrowLeft2x-icon.png')}
                        />
                    </Pressable>
                    <Pressable onPress={() => addMonth?.(1)}>
                        <Image
                            style={styles.date__img}
                            source={require('@assets/icons/calendar-arrowRight2x-icon.png')}
                        />
                    </Pressable>
                </View>
                <Pressable style={styles.content__closePressable}>
                    <Image
                        style={styles.content__closeImg}
                        source={require('@assets/icons/calendar-cancel3x-icon.png')}
                    />
                </Pressable>
            </View>

            <View style={styles.week}>
                {WEEKDAYS.map((day, index) => (
                    <Text key={index} style={styles.dayHeader}>
                        {day}
                    </Text>
                ))}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content__date: {
        flexDirection: 'row',
        marginTop: 19,
        marginBottom: 17,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    date__textDate: {
        fontSize: 16,
        fontWeight: '500',
        marginRight: 8,
    },
    date__img: {
        height: 40,
        width: 38,
    },
    content__closePressable: {
        height: 30,
        width: 30,
        borderRadius: 25,
        backgroundColor: '#f5f5f5',
        justifyContent: 'center',
        alignItems: 'center',
        top: 20,
        right: 20,
    },
    content__closeImg: {
        height: 10,
        width: 10,
    },
    week: {
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    dayHeader: {
        marginTop: 2,
        marginBottom: 7,
        width: 32,
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '500',
        color: Colors.BLACK,
        opacity: 0.3,
    },
});

export default CalendarHeader;
