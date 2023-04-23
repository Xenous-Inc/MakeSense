import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { TaskCard } from './TaskCard';
import { ITask } from 'src/models/task';
import { Colors } from '@styles/colors';

export interface ITaskCarouselProps {
    tasks: Array<ITask>;
}

const buttonColors = [Colors.BLUE, Colors.GREEN, Colors.YELLOW, Colors.PURPLE];
export const TaskCarousel: React.FC<ITaskCarouselProps> = props => {
    const [activeSlide, setActiveSlide] = useState(0);

    const renderSlide = ({ item, index }: { item: ITask; index: number }) => (
        <TaskCard task={item} color={buttonColors[index % buttonColors.length]} />
    );

    return (
        <View style={styles.container}>
            <Carousel
                data={props.tasks}
                renderItem={renderSlide}
                sliderWidth={400}
                itemWidth={300}
                onSnapToItem={setActiveSlide}
                loop
                sliderHeight={500}
                activeSlideOffset={20}
                activeSlideAlignment='center'
                inactiveSlideScale={0.9}
                lockScrollWhileSnapping={true}
                snapToInterval={150}
            />
            <Pagination
                dotsLength={props.tasks.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.paginationContainer}
                dotStyle={
                    (styles.paginationButton, { backgroundColor: buttonColors[activeSlide % buttonColors.length] })
                }
                inactiveDotStyle={
                    (styles.paginationButton, { backgroundColor: buttonColors[activeSlide % buttonColors.length] })
                }
                inactiveDotScale={0.5}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '110%',
        height: '100%',
        paddingTop: 300,
    },
    paginationButton: {
        width: 8,
        height: 8,
        borderRadius: 10,
        marginHorizontal: 10,
    },
    paginationContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 20,
    },
});
