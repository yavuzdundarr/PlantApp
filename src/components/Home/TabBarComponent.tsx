import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';
import CustomText from '../../components/CustomText';

const { width, height } = Dimensions.get('window');

const TabBarComponent: React.FC = () => {
    return (
        <View style={styles.container}>

            {/* Sekme 1 */}
            <View style={styles.tabItem}>
                {/* Placeholder ikon */}
                <Image
                    source={require('../../assets/icons/homepageIcon.png')} // Örnek
                    style={styles.icon}
                />
                <CustomText style={[styles.title, { color: '#28AF6E' }]} weight={'regular'}>Home</CustomText>

            </View>

            {/* Sekme 2 */}
            <View style={styles.tabItem}>
                <Image
                    source={require('../../assets/icons/diagnoseIcon.png')}
                    style={styles.icon}
                />
                <CustomText style={styles.title} weight={'regular'}>Diagnose</CustomText>
            </View>

            {/* Sekme Ortada Yeşil Daire */}
            <View style={[styles.tabItem, styles.centerCircle]}>
                <Image
                    source={require('../../assets/icons/scanImage.png')}
                    style={styles.centerIcon}
                />
            </View>

            {/* Sekme 4 */}
            <View style={styles.tabItem}>
                <Image
                    source={require('../../assets/icons/mygardenIcon.png')}
                    style={styles.icon}
                />
                <CustomText style={styles.title} weight={'regular'}>My Garden</CustomText>
            </View>

            <View style={styles.tabItem}>
                <Image
                    source={require('../../assets/icons/profileIcon.png')}
                    style={styles.icon}
                />
                <CustomText style={styles.title} weight={'regular'}>Profile</CustomText>
            </View>
        </View>
    );
};

export default TabBarComponent;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        paddingBottom: height * 0.03,
        height: height * 0.1,
        backgroundColor: '#FFF',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderTopWidth: 0.3,
        borderTopColor: '#CCC',
    },
    tabItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    icon: {
        width: 26,
        height: 26,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 10,
        color: '#979798',
        alignItems: 'center',
        letterSpacing: -0.24,
    },

    // Ortadaki büyük yeşil daire
    centerCircle: {
        backgroundColor: '#28AF6E',
        width: 80,
        height: 80,
        borderRadius: 1000,
        marginBottom: 30,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
        elevation: 4,
    },
    centerIcon: {
        width: 28,
        height: 28,
        resizeMode: 'contain',
        tintColor: '#FFF',
    },
});
