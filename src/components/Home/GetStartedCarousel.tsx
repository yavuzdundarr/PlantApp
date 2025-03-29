import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';

interface Question {
    id: number;
    title: string;
    subtitle: string;
    image_uri: string;
    uri: string;
}

interface Props {
    data: Question[];
}

const { width } = Dimensions.get('window');

const GetStartedCarousel: React.FC<Props> = ({ data }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Get Started</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {data.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.card}>
                        <ImageBackground source={{ uri: item.image_uri }} style={styles.image}>
                            <Text style={styles.cardTitle}>{item.title}</Text>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#222',
    },
    card: {
        width: width * 0.6,
        height: 180,
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: 15,
    },
    image: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: 10,
    },
    cardTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default GetStartedCarousel;
