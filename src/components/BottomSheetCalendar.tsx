import React, { useCallback, useMemo, useRef } from 'react';
import { Text, StyleSheet } from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';

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
        <BottomSheet ref={bottomSheetRef} index={2} snapPoints={snapPoints} enableHandlePanningGesture={false}>
            {props.indexPos ? <Text>1</Text> : <Text>0</Text>}
            {props.indexPos
                ? null
                : () => {
                      handleClosePress();
                  }}
        </BottomSheet>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
});
