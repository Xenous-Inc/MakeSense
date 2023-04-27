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
        <View style={styles.wrapper}>
            <Pressable onPress={onMenuClick}>
                <Image source={require('@assets/icons/menu-icon.png')} style={styles.img} />
            </Pressable>
            <Pressable onPress={onCalendarClick}>
                <Image source={require('@assets/icons/calendar-icon.png')} style={styles.img} />
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: Colors.WHITE,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
    },

    img: {
        width: 48,
        height: 48,
    },
});
