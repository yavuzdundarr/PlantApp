import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const CustomPageIndicator = () => {
    const currentStep = useSelector((state: RootState) => state.onboarding.currentStep);

    return (
        <View style={styles.pagination}>
            {[1, 2, 3].map(step => (
                <View key={step} style={currentStep === step ? styles.activeDot : styles.inactiveDot} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    pagination: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
    },
    activeDot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#13231B',
    },
    inactiveDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#C4C4C4',
    },
});

export default CustomPageIndicator;
