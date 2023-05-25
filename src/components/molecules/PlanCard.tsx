import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import { SquircleView } from 'react-native-figma-squircle';
import { Colors } from '@styles/colors';

const imageButton = {
    notMarkedIcon: require('@assets/icons/not-marked-icon.png'),
    markedIcon: require('@assets/icons/marked-icon.png'),
};

export const PlanCard: React.FC = () => {
    const [items, setItems] = useState([
        { id: 1, isCompleted: false, text: 'finish the presentation' },
        { id: 2, isCompleted: false, text: 'meeting at 3 pm' },
        { id: 3, isCompleted: false, text: 'pay for mobile communication' },
        { id: 4, isCompleted: false, text: 'create app' },
    ]);

    const buttonSwitching = (id: number) => {
        setItems(items.map(item => (item.id === id ? { ...item, isCompleted: !item.isCompleted } : item)));
    };

    return (
        <SquircleView
            style={styles.content}
            squircleParams={{ cornerSmoothing: 0.7, cornerRadius: 20, fillColor: Colors.BLACK }}
        >
            <SquircleView
                style={styles.content__circle}
                squircleParams={{ cornerSmoothing: 0.7, cornerRadius: 100, fillColor: '#5E5E5E' }}
            />

            <View style={styles.content__elements}>
                <Text style={styles.elements__title}>Plans for the day</Text>
                <View>
                    {items.map(item => (
                        <View style={styles.records__item} key={item.id}>
                            <TouchableOpacity onPress={() => buttonSwitching(item.id)}>
                                <Image
                                    style={styles.content__icon}
                                    source={item.isCompleted ? imageButton.markedIcon : imageButton.notMarkedIcon}
                                />
                            </TouchableOpacity>
                            <Text style={[styles.item__text, item.isCompleted ? styles.completedItem__text : null]}>
                                {item.text}
                            </Text>
                        </View>
                    ))}
                </View>
            </View>
        </SquircleView>
    );
};

const styles = StyleSheet.create({
    content: {
        width: '40%',
        height: '50%',
        overflow: 'scroll',
        borderRadius: 20,
    },
    content__circle: {
        width: '25%',
        height: '20%',
        marginLeft: '84%',
        opacity: 0.9,
        bottom: '9%',
    },
    content__elements: {
        width: 155,
        height: 222,
        bottom: '7%',
    },
    elements__title: {
        fontFamily: 'OnestMedium',
        fontSize: 16,
        color: Colors.WHITE,
        width: 80,
        height: 40,
        marginLeft: 16,
        bottom: 10,
    },
    content__icon: {
        tintColor: Colors.WHITE,
        width: 36,
        height: 36,
    },
    records__item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 6,
    },
    item__text: {
        color: Colors.WHITE,
        width: '90%',
        bottom: '1%',
    },
    completedItem__text: {
        color: Colors.WHITE,
        width: '90%',
        textDecorationLine: 'line-through',
        opacity: 0.5,
    },
});
