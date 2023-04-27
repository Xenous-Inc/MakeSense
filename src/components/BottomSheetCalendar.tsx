import React, { useCallback, useMemo, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import { Calendar } from 'react-native-calendars';

export interface IHeader {
    indexPos: boolean;
}
export const BottomSheetCalendar: React.FC<IHeader> = props => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);
    // variables
    const snapPoints = useMemo(() => ['10%', '25%', '50%', '75%'], []);
    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const handleClosePress = () => {
        bottomSheetRef.current?.snapToIndex(1);
    };
    return (
        <BottomSheet
            ref={bottomSheetRef}
            index={2}
            snapPoints={snapPoints}
            enableHandlePanningGesture={true}
            handleIndicatorStyle={{ height: 0 }}
            handleStyle={{ height: 0, padding: 0 }}
        >
            <Calendar
                theme={{
                    'arrowColor': '#000',
                    'textDayFontWeight': 'bold',
                    'stylesheet.calendar.header': { dayTextAtIndex0: { color: 'red' } },
                    'todayTextColor': '#fff',
                    'todayBackgroundColor': '#000',
                }}
                style={{ borderTopRightRadius: 13, borderTopLeftRadius: 13 }}
            />
            {props.indexPos ? <Text>1</Text> : <Text>0</Text>}
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
