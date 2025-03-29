import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const TabBarComponent: React.FC = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/tabBar.png')} style={styles.tabBarImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabBarImage: {
        width: '100%',
        height: 70,
        resizeMode: 'cover',
    },
});

export default TabBarComponent;
