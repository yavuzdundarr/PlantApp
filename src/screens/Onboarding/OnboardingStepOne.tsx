import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IdentifyPlant: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 24}}>Identify Plant Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default IdentifyPlant;
