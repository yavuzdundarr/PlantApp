import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Linking } from 'react-native';

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
    const handlePress = (uri: string) => {
        Linking.openURL(uri).catch((err) => console.error('Failed to open URL:', err));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Get Started</Text>
            <ScrollView
                horizontal
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.carouselContainer}
            >
                {data.map((item) => (
                    <TouchableOpacity key={item.id} style={styles.card} onPress={() => handlePress(item.uri)}>
                        <ImageBackground source={{ uri: item.image_uri }} style={styles.image}>
                            <View style={styles.textWrapper}>
                                <Text style={styles.cardTitle}>{item.title}</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};

export default GetStartedCarousel;

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#222',
        paddingHorizontal: width * 0.07,
    },
    carouselContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.07,
    },
    card: {
        width: width * 0.65,
        height: width * 0.45,
        borderRadius: 12,
        overflow: 'hidden',
        marginRight: 15,
    },
    image: {
        flex: 1,
    },
    textWrapper: {
        position: 'absolute',
        top: '70%',
        left: '5%',
        right: '5%',
    },
    cardTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
