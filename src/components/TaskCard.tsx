import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { ITask } from 'src/models/note';

export interface ITaskCardProps {
    note: ITask;
}

export const TaskCard: React.FC<ITaskCardProps> = props => {
    const {
        title,
        text,
        taskCardColor,
        firsSubTaskColor,
        secondSubTaskColor,
        folder,
        time,
        cardBordersColor,
        cardShadowColor,
        isCompleted,
    } = props.note;
    const icon = {
        emptyIcon: require('@assets/icons/not-marked-icon.png'),
        notEmptyIcon: require('@assets/icons/marked-icon.png'),
    };
    const [isFinished, isUnfinished] = useState(isCompleted);
    return (
        <>
            <SquircleView
                style={
                    (styles.content__secondtSubTask, { borderColor: cardBordersColor, shadowColor: cardShadowColor })
                }
                squircleParams={{
                    cornerSmoothing: 0.7,
                    cornerRadius: 32,
                    fillColor: secondSubTaskColor,
                }}
            />
            <SquircleView
                style={styles.content__firstSubTask}
                squircleParams={{
                    cornerSmoothing: 0.7,
                    cornerRadius: 32,
                    fillColor: firsSubTaskColor,
                }}
            />
            <SquircleView
                style={styles.content}
                squircleParams={{
                    cornerSmoothing: 0.7,
                    cornerRadius: 40,
                    fillColor: taskCardColor,
                }}
            >
                <TouchableOpacity onPress={() => isUnfinished(!isFinished)}>
                    <Image source={!isFinished ? icon.notEmptyIcon : icon.emptyIcon} style={styles.content__icon} />
                </TouchableOpacity>
                <View style={styles.content__textComponents}>
                    <Text style={styles.content__textComponents__title}>{title}</Text>
                    <Text style={styles.content__textComponents__text}>{text}</Text>
                    <Text style={styles.content__textComponents__folderAndTime}>
                        `${folder} ${time}`
                    </Text>
                </View>
            </SquircleView>
        </>
    );
};

const styles = StyleSheet.create({
    content: {
        width: '100%',
        borderWidth: 0.5,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        opacity: 0.9,
        elevation: 20,
    },
    content__textComponents: {
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
        top: 14,
    },
    content__textComponents__title: {
        width: 247,
        height: 28,
        fontFamily: 'OnestMedium',
        fontSize: 22,
    },
    content__textComponents__text: {
        width: 247,
        height: 82,
        fontFamily: 'OnestRegular',
        fontSize: 15,
        opacity: 0.5,
    },
    content__textComponents__folderAndTime: {
        fontFamily: 'OnestMedium',
        fontSize: 13,
        opacity: 0.5,
    },
    content__icon: {
        width: 36,
        height: 36,
        alignSelf: 'flex-start',
        top: 10,
    },
    content__firstSubTask: {
        width: 295,
        height: 50,
        opacity: 0.4,
        top: 185,
    },
    content__secondtSubTask: {
        width: 262,
        height: 50,
        opacity: 0.3,
        top: 250,
    },
});
