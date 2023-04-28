import React, { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Calendar } from 'react-native-calendars';
import CalendarHeader from './molecules/CalendarHeader';

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
    }, [isBottomSheetOpen]);
    // ref

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
