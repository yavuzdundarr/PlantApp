import React from 'react';
import { View, Text, TextInput, StyleSheet, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const HeaderComponent: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.smallText}>Hi, plant lover!</Text>
            <Text style={styles.largeText}>Good Afternoon! ☁️</Text>

            <View style={styles.searchContainer}>
                <TextInput placeholder="Search for plants" style={styles.searchInput} />
            </View>

            <Image
                source={require('../../assets/images/headerBackground.png')}
                style={styles.backgroundImage}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 15,
    },
    smallText: {
        fontSize: 16,
        color: '#555',
    },
    largeText: {
        fontSize: 26,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#222',
    },
    searchContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        elevation: 3,
        marginTop: 10,
        paddingHorizontal: 15,
    },
    searchInput: {
        height: 45,
    },
    backgroundImage: {
        position: 'absolute',
        right: 0,
        top: 0,
        width: width * 0.3,
        height: width * 0.3,
        resizeMode: 'contain',
    },
});

export default HeaderComponent;
