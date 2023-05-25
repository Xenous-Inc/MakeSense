import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { Colors } from '@styles/colors';
import { INote } from 'src/models/note';

export interface INoteCardProps {
    note: INote;
}

export const NoteCard: React.FC<INoteCardProps> = props => {
    const heart = {
        grey: require('@assets/icons/heart-off-icon.png'),
        black: require('@assets/icons/heart-on-icon.png'),
    };

    const [isFavourite, setIsFavourite] = useState(true);

    const { title, folder } = props.note;
    return (
        <SquircleView
            style={styles.content}
            squircleParams={{
                cornerSmoothing: 0.7,
                cornerRadius: 20,
                fillColor: Colors.GRAY,
            }}
        >
            <View style={styles.content__text}>
                <Text style={styles.text__folder}>{folder}</Text>
                <Text style={styles.text__title}>{title}</Text>
            </View>
            <TouchableOpacity onPress={() => setIsFavourite(!isFavourite)}>
                <Image source={!isFavourite ? heart.black : heart.grey} style={styles.content__icon} />
            </TouchableOpacity>
        </SquircleView>
    );
};

const styles = StyleSheet.create({
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    content__icon: {
        width: 40,
        height: 40,
        alignItems: 'flex-start',
    },
    content__text: {
        justifyContent: 'space-around',
    },
    text__folder: {
        left: 16,
        fontFamily: 'OnestRegular',
        fontSize: 11,
        fontStyle: 'normal',
        opacity: 0.3,
    },
    text__title: {
        fontFamily: 'OnestMedium',
        fontSize: 13,
        fontStyle: 'normal',
        left: 16,
    },
});
