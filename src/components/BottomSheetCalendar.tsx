import React, { useCallback, useMemo, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

export const BottomSheetCalendar = () => {
    // ref
    const bottomSheetRef = useRef<BottomSheet>(null);

    // variables
    const snapPoints = useMemo(() => ['10%', '25%', '50%', '75%'], []);

    // callbacks
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);

    // renders
    return (
        <BottomSheet ref={bottomSheetRef} index={0} snapPoints={snapPoints} enableHandlePanningGesture={false}>
            <Text>Awesome</Text>
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
