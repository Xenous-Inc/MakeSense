import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { TaskCard } from './TaskCard';
import { ITask } from 'src/models/task';
import { Colors } from '@styles/colors';

export interface ITaskCarouselProps {
    tasks: Array<ITask>;
}

const buttonColors = [Colors.BLUE, Colors.GREEN, Colors.YELLOW, Colors.PURPLE];

export const TaskCarousel: React.FC<ITaskCarouselProps> = props => {
    const width = Dimensions.get('window').width;

    const renderSlide = ({ item, index }: { item: ITask; index: number }) => (
        <TaskCard task={item} color={buttonColors[index % buttonColors.length]} />
    );

    return (
        <View style={styles.container}>
            <Carousel
                width={width}
                data={props.tasks}
                renderItem={renderSlide}
                mode={'parallax'}
                modeConfig={{
                    parallaxScrollingScale: 0.9,
                    parallaxScrollingOffset: 44,
                }}
                loop
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 180,
    },
});
