import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ViewStyle, StyleProp } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { Colors } from '@styles/colors';
import { ITask } from 'src/models/task';

export interface ITaskCardProps {
    task: ITask;
    style?: StyleProp<ViewStyle>;
    color: string;
}

export const TaskCard: React.FC<ITaskCardProps> = props => {
    const { task, style, color } = props;

    const icon = {
        empty: require('@assets/icons/not-marked-icon.png'),
        completed: require('@assets/icons/marked-icon.png'),
    };

    const [isCompleted, setIsCompleted] = useState(task.isCompleted);

    return (
        <View style={[styles.wrapper, style]}>
            <SquircleView
                style={styles.wrapper__content}
                squircleParams={{
                    cornerSmoothing: 1,
                    cornerRadius: 32,
                    fillColor: Colors.WHITE,
                    strokeColor: color,
                    strokeWidth: 1,
                }}
            >
                <TouchableOpacity onPress={() => setIsCompleted(!isCompleted)}>
                    <Image
                        source={!isCompleted ? icon.completed : icon.empty}
                        style={[styles.content__icon, { tintColor: color }]}
                    />
                </TouchableOpacity>
                <View style={styles.content__text}>
                    <Text style={styles.text__title}>{task.title}</Text>
                    <Text style={styles.text__message} textBreakStrategy={'balanced'} numberOfLines={3}>
                        {task.text}
                    </Text>
                    <Text style={styles.text__meta}>{`${task.folder} ${task.time}`}</Text>
                </View>
            </SquircleView>
            <View style={styles.wrapper__background}>
                <SquircleView
                    style={styles.background__first}
                    squircleParams={{
                        cornerSmoothing: 1,
                        cornerRadius: 24,
                        fillColor: color,
                    }}
                />
                <SquircleView
                    style={[styles.background__second]}
                    squircleParams={{
                        cornerSmoothing: 1,
                        cornerRadius: 24,
                        fillColor: color,
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    wrapper__content: {
        flexDirection: 'row',
        elevation: 20,
        padding: 18,
        gap: 12,
        zIndex: 10,
    },
    content__text: {
        flex: 1,
        alignItems: 'stretch',
    },
    text__title: {
        fontFamily: 'OnestMedium',
        fontSize: 22,
        color: Colors.BLACK,
        opacity: 0.9,
    },
    text__message: {
        marginTop: 8,
        fontFamily: 'OnestRegular',
        fontSize: 15,
        color: Colors.BLACK,
        opacity: 0.5,
    },
    text__meta: {
        marginTop: 16,
        fontFamily: 'OnestMedium',
        fontSize: 13,
        color: Colors.BLACK,
        opacity: 0.5,
    },
    content__icon: {
        width: 36,
        height: 36,
    },
    wrapper__background: {
        position: 'relative',
    },
    background__first: {
        position: 'absolute',
        height: 50,
        left: 16,
        top: -38,
        right: 16,
        opacity: 0.2,
    },
    background__second: {
        position: 'absolute',
        height: 50,
        left: 32,
        top: -26,
        right: 32,
        opacity: 0.1,
    },
});
