import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Calendar } from 'react-native-calendars';
import CalendarHeader from './molecules/CalendarHeader';
import { Colors } from '@styles/colors';

export interface IBottomSheetCalendarProps {
    isBottomSheetOpen: boolean;
    setIsBottomSheetOpen: Dispatch<SetStateAction<boolean>>;
}
export const BottomSheetCalendar: React.FC<IBottomSheetCalendarProps> = props => {
    /* LocaleConfig.locales.en = {
        monthNames: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ],
        monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        dayNamesShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        today: 'Today',
    };
    LocaleConfig.defaultLocale = 'en';*/
    const { isBottomSheetOpen, setIsBottomSheetOpen } = props;
    const bottomSheetRef = useRef<BottomSheet>(null);

    useEffect(() => {
        if (isBottomSheetOpen) bottomSheetRef.current?.snapToIndex(0);
        console.log(TODAY_DATE);
    }, [isBottomSheetOpen]);
    // ref
    const CURRENT_DATE = new Date();
    const TODAY_DATE = `${Intl.DateTimeFormat('en', { year: 'numeric' }).format(CURRENT_DATE)}-${Intl.DateTimeFormat(
        'en',
        {
            month: '2-digit',
        },
    ).format(CURRENT_DATE)}-${Intl.DateTimeFormat('en', { day: '2-digit' }).format(CURRENT_DATE)}`;

    return (
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
                customHeader={CalendarHeader}
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
                            text: {
                                position: 'absolute',
                                left: -4,
                                right: -4,
                                top: -4,
                                bottom: -4,
                                width: 'auto',
                                height: 'auto',
                                backgroundColor: Colors.BLACK,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                aspectRatio: 1,
                                marginTop: 0,
                                borderRadius: 25,
                            },
                        },
                    },
                }}
                style={{ borderTopRightRadius: 15, borderTopLeftRadius: 15 }}
                firstDay={1}
            />
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
