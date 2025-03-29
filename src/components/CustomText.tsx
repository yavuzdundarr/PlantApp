import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

interface CustomTextProps extends TextProps {
    weight?: 'light' | 'regular' | 'medium' | 'bold' | 'extraBold';
    children: React.ReactNode;
}

const CustomText: React.FC<CustomTextProps> = ({ style, weight = 'regular', children, ...rest }) => {
    const fontStyles = [
        styles.defaultFont,
        weight === 'light' && styles.light,
        weight === 'medium' && styles.medium,
        weight === 'bold' && styles.bold,
        weight === 'extraBold' && styles.extraBold,
        style
    ];

    return (
        <Text style={fontStyles} {...rest}>
            {children}
        </Text>
    );
};

const styles = StyleSheet.create({
    defaultFont: {
        fontFamily: 'Rubik-Regular',
        color: '#000',
    },
    light: {
        fontFamily: 'Rubik-Light',
    },
    medium: {
        fontFamily: 'Rubik-Medium',
    },
    bold: {
        fontFamily: 'Rubik-Bold',
    },
    extraBold: {
        fontFamily: 'Rubik-ExtraBold',
    },
});

export default CustomText;
