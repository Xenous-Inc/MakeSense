import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Colors } from '@styles/colors';

export interface IHeader {
    onMenuClick?: () => void;
    onCalendarClick?: () => void;
}

export const Header: React.FC<IHeader> = props => {
    const { onMenuClick, onCalendarClick } = props;

    return (
        <View style={styles.content}>
            <Pressable onPress={onMenuClick}>
                <Image source={require('@assets/icons/menu-icon.png')} style={styles.content__icon} />
            </Pressable>
            <Pressable onPress={onCalendarClick}>
                <Image source={require('@assets/icons/calendar-icon.png')} style={styles.content__icon} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        width: '100%',
        backgroundColor: Colors.WHITE,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingHorizontal: 16,
        padding: 4,
    },
    content__icon: {
        width: 48,
        height: 48,
    },
});
