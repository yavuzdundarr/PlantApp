import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PremiumBoxComponent: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container}>
            {/* Mail Icon */}
            <Image
                source={require('../../assets/icons/mailIcon.png')}
                style={styles.mailIcon}
            />

            {/* Metinler */}
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>FREE Premium Available</Text>
                <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
            </View>

            <Image
                source={require('../../assets/icons/arrowIcon.png')}
                style={styles.arrow}
            />
        </TouchableOpacity>
    );
};

export default PremiumBoxComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#24201A',
        borderRadius: 12,
        padding: 15,
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 15,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    mailIcon: {
        width: 48,
        height: 40,
        marginRight: 20,
    },
    title: {
        color: '#E5C990',
        fontWeight: '700',
        fontSize: 16,
        letterSpacing: -0.32,
    },
    subtitle: {
        color: '#E5C99090',
        fontSize: 13,
        marginTop: 2,
    },
    arrow: {
        width: 24,
        height: 24,
        marginLeft: 10,
    },
});
