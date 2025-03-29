import React from 'react';
import { View, TextInput, StyleSheet, Dimensions, ImageBackground, SafeAreaView, Image } from 'react-native';
import CustomText from '../../components/CustomText';

const { width, height } = Dimensions.get('window');

const HeaderComponent: React.FC = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <ImageBackground
                source={require('../../assets/images/headerBackground.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.container}>
                    <CustomText style={styles.smallText} weight={"regular"}>Hi, plant lover!</CustomText>
                    <CustomText style={styles.largeText} weight={"medium"}>Good Afternoon! ⛅</CustomText>
                    <View style={styles.searchContainer}>
                        <Image
                            source={require('../../assets/icons/searchIcon.png')}
                            style={styles.searchIcon}
                        />
                        <TextInput
                            placeholder="Search for plants"
                            style={styles.searchInput}
                            placeholderTextColor="#aaa"
                        />
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#F6F6F6',
    },
    container: {
        paddingTop: height * 0.07,
        paddingHorizontal: 20,
        paddingBottom: 15,
    },
    backgroundImage: {
        right: 0,
        top: 0,
        width: width,
        height: width * 0.51,
        resizeMode: 'cover',
    },
    smallText: {
        fontSize: 19,
        color: '#13231B',
    },
    largeText: {
        fontSize: 28,
        color: '#13231B',
    },
    searchContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginTop: 10,
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
        opacity: 0.9,
    },
    searchIcon: {
        width: 20,
        height: 20,
        marginRight: 8, // Icon ile textInput arasında boşluk
        tintColor: '#aaa', // İkonu gri yapmak için
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default HeaderComponent;
