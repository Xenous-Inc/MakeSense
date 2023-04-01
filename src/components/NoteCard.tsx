import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { Colors } from '@styles/colors';

export interface INoteCard {
    folderName: string;
    noteTitle: string;
}

export const NoteCard: React.FC<INoteCard> = props => {
    const heartColor = {
        greyHeart: require('@assets/icons/heart-off-icon.png'),
        blackHeart: require('@assets/icons/heart-on-icon.png'),
    };

    const [isHeartState, setIsHeartState] = useState(true);
    const changeHeart = () => {
        return false;
    };
    const { folderName, noteTitle } = props;
    return (
        <SquircleView
            style={styles.imgNoteCard}
            squircleParams={{
                cornerSmoothing: 0.7,
                cornerRadius: 20,
                fillColor: Colors.GRAY,
            }}
        >
            <View style={styles.textElements}>
                <Text style={styles.folderNameText}>{folderName}</Text>
                <Text style={styles.titleText}>{noteTitle}</Text>
            </View>
            <TouchableOpacity onPress={() => setIsHeartState(!isHeartState)}>
                <Image source={!isHeartState ? heartColor.blackHeart : heartColor.greyHeart} style={styles.imgHeart} />
            </TouchableOpacity>
        </SquircleView>
    );
};

const styles = StyleSheet.create({
    imgNoteCard: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imgHeart: {
        width: 40,
        height: 40,
        alignItems: 'flex-start',
    },
    folderNameText: {
        left: 16,
        fontFamily: 'OnestRegular',
        fontSize: 11,
        fontStyle: 'normal',
        opacity: 0.3,
    },
    titleText: {
        fontFamily: 'OnestMedium',
        fontSize: 13,
        fontStyle: 'normal',
        left: 16,
    },
    textElements: {
        justifyContent: 'space-around',
    },
});
