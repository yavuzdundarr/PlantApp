import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PremiumBoxComponent: React.FC = () => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.icon}>📩</Text>
            <View style={{ flex: 1 }}>
                <Text style={styles.title}>FREE Premium Available</Text>
                <Text style={styles.subtitle}>Tap to upgrade your account!</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#24201A',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        marginVertical: 10,
    },
    icon: {
        fontSize: 24,
        marginRight: 10,
    },
    title: {
        color: '#E5C990',
        fontWeight: 'bold',
        fontSize: 15,
    },
    subtitle: {
        color: '#E5C99090',
        fontSize: 13,
    },
    arrow: {
        fontSize: 24,
        color: '#E5C990',
    },
});

export default PremiumBoxComponent;
