import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { ITask } from 'src/models/task';

export interface ITaskCardProps {
    task: ITask;
    firstBackgroundElementColor: string;
    secondBackgroundElementColor: string;
    taskCardColor: string;
    cardBordersColor: string;
    cardShadowColor: string;
}

export const TaskCard: React.FC<ITaskCardProps> = props => {
    const {
        task,
        firstBackgroundElementColor,
        secondBackgroundElementColor,
        taskCardColor,
        cardBordersColor,
        cardShadowColor,
    } = props;
    const icon = {
        empty: require('@assets/icons/not-marked-icon.png'),
        notEmpty: require('@assets/icons/marked-icon.png'),
    };
    const [isCompleted, setIsCompleted] = useState(task.isCompleted);
    return (
        <View style={styles.wrapper}>
            <SquircleView
                style={styles.wrapper__content}
                squircleParams={{
                    cornerSmoothing: 0.7,
                    cornerRadius: 40,
                    fillColor: taskCardColor,
                }}
            >
                <TouchableOpacity onPress={() => setIsCompleted(!isCompleted)}>
                    <Image source={!isCompleted ? icon.notEmpty : icon.empty} style={styles.content__icon} />
                </TouchableOpacity>
                <View style={styles.content__textComponents}>
                    <Text style={styles.textComponents__title}>{task.title}</Text>
                    <Text style={styles.textComponents__text}>{task.text}</Text>
                    <Text style={styles.textComponents__folderAndTime}>
                        `${task.folder} ${task.time}`
                    </Text>
                </View>
            </SquircleView>
            <View style={styles.wrapper__background}>
                <SquircleView
                    style={(styles.background__second, { borderColor: cardBordersColor, shadowColor: cardShadowColor })}
                    squircleParams={{
                        cornerSmoothing: 0.7,
                        cornerRadius: 32,
                        fillColor: 'red',
                    }}
                />
                <SquircleView
                    style={styles.background__first}
                    squircleParams={{
                        cornerSmoothing: 0.7,
                        cornerRadius: 32,
                        fillColor: firstBackgroundElementColor,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        marginHorizontal: 20,
        overflow: 'visible',
    },
    wrapper__content: {
        width: '100%',
        height: 'auto',
        borderWidth: 0.5,
        borderRadius: 40,
        flexDirection: 'row',
        alignItems: 'stretch',
        opacity: 0.9,
        elevation: 20,
        padding: 12,
        gap: 12,
        minHeight: 120,
    },
    content__textComponents: {
        alignItems: 'flex-start',
        justifyContent: 'space-evenly',
    },
    textComponents__title: {
        width: '100%',
        fontFamily: 'OnestMedium',
        fontSize: 22,
    },
    textComponents__text: {
        width: '100%',
        fontFamily: 'OnestRegular',
        fontSize: 15,
        opacity: 0.5,
    },
    textComponents__folderAndTime: {
        fontFamily: 'OnestMedium',
        fontSize: 13,
        opacity: 0.5,
    },
    content__icon: {
        width: 36,
        height: 36,
        alignSelf: 'flex-start',
    },
    wrapper__background: {
        position: 'relative',
        overflow: 'visible',
    },
    background__first: {
        width: '90%',
        position: 'absolute',
        height: 50,
        opacity: 0.4,
        top: 0,
    },
    background__second: {
        width: '80%',
        position: 'absolute',
        height: 50,
        opacity: 0.3,
        top: 50,
    },
});
