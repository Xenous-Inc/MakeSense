import React, { Dispatch, SetStateAction, useCallback, useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Calendar } from 'react-native-calendars';
import CalendarHeader from 'react-native-calendars/src/calendar/header';
import { ICalendarHeaderProps } from './CalendarHeader';
import { Colors } from '@styles/colors';

export interface IBottomSheetCalendarProps {
    isBottomSheetOpen: boolean;
    setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
}
export const BottomSheetCalendar: React.FC<IBottomSheetCalendarProps> = props => {
    const { isBottomSheetOpen, setIsBottomSheetOpen } = props;
    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        if (isBottomSheetOpen) bottomSheetRef.current?.snapToIndex(0);
    }, [isBottomSheetOpen]);

    const CURRENT_DATE = new Date();
    const TODAY_DATE = `${Intl.DateTimeFormat('en', { year: 'numeric' }).format(CURRENT_DATE)}-${Intl.DateTimeFormat(
        'en',
        {
            month: '2-digit',
        },
    ).format(CURRENT_DATE)}-${Intl.DateTimeFormat('en', { day: '2-digit' }).format(CURRENT_DATE)}`;

    const renderHeader = useCallback(
        (prop: ICalendarHeaderProps) => {
            return (
                <CalendarHeader
                    {...prop}
                    onClose={() => {
                        setIsBottomSheetOpen(false);
                        bottomSheetRef.current?.close();
                    }}
                />
            );
        },
        [bottomSheetRef.current],
    );

    return (
        <>
            {isBottomSheetOpen ? <View style={styles.darkness} /> : null}
            <BottomSheet
                ref={bottomSheetRef}
                index={-1}
                snapPoints={['55%']}
                enableHandlePanningGesture={true}
                handleIndicatorStyle={{ height: 0 }}
                handleStyle={{ height: 0, padding: 0 }}
                onChange={index => index === -1 && setIsBottomSheetOpen(false)}
                enablePanDownToClose={true}
            >
                <Calendar
                    hideDayNames={false}
                    customHeader={renderHeader}
                    theme={{
                        arrowColor: '#000',
                        textDayFontWeight: 'bold',
                        todayTextColor: '#fff',
                        todayBackgroundColor: '#000',
                        textDayHeaderFontSize: 15,
                    }}
                    markingType='custom'
                    markedDates={{
                        [TODAY_DATE]: {
                            customStyles: {
                                container: {
                                    position: 'relative',
                                },
                                text: styles.todayMark,
                            },
                        },
                    }}
                    style={styles.calendar}
                    firstDay={1}
                />
            </BottomSheet>
        </>
    );
};

const styles = StyleSheet.create({
    darkness: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        backgroundColor: Colors.DARK_GRAY,
        opacity: 0.2,
    },
    calendar: {
        borderTopRightRadius: 15,
        borderTopLeftRadius: 15,
    },
    todayMark: {
        position: 'absolute',
        left: -6,
        right: -6,
        top: -6,
        bottom: -6,
        width: 'auto',
        height: 'auto',
        backgroundColor: Colors.BLACK,
        textAlign: 'center',
        textAlignVertical: 'center',
        aspectRatio: 1,
        marginTop: 0,
        borderRadius: 25,
    },
});
