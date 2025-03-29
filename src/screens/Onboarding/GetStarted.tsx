import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, ImageBackground } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import CustomText from '../../components/CustomText';
import { RootStackParamList } from '../../navigation/AppNavigator';

const { width, height } = Dimensions.get('window');

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'GetStarted'>;

const GetStarted: React.FC = () => {
    const navigation = useNavigation<NavigationProps>();

    return (
        <ImageBackground
            source={require('../../assets/images/background1.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>

                <View style={styles.textContainer}>
                    <CustomText style={styles.title}>
                        Welcome to <CustomText style={{ fontWeight: 'bold' }}>PlantApp</CustomText>
                    </CustomText>
                    <CustomText style={styles.description}>
                        Identify more than 3000+ plants and{'\n'}88% accuracy.
                    </CustomText>
                </View>

                <Image
                    source={require('../../assets/images/plant1.png')}
                    style={styles.plantImage}
                    resizeMode="contain"
                />

                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('OnboardingStepOne')}
                    >
                        <CustomText style={styles.buttonText}>Get Started</CustomText>
                    </TouchableOpacity>
                    <CustomText style={[styles.termsText, { marginTop: 10 }]}>
                    By tapping next, you are agreeing to PlantID{'\n'}
                    <CustomText style={[styles.termsText, { textDecorationLine: 'underline', color: '#A0A0A0' }]}>
                        Terms of Use
                    </CustomText>
                    {'  &  '}
                    <CustomText style={[styles.termsText, { textDecorationLine: 'underline', color: '#A0A0A0' }]}>
                        Privacy Policy
                    </CustomText>
                </CustomText>
                </View>

            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        paddingVertical: height * 0.05,
    },
    textContainer: {
        paddingHorizontal: '12%',
    },
    title: {
        fontSize: 28,
        color: '#000',
        textAlign: 'left',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        color: '#666',
        textAlign: 'left',
        marginTop: 10,
    },
    plantImage: {
        width: width,
        height: height * 0.65,
        marginBottom: -width * 0.2,
        marginTop: -width * 0.05,
    },
    buttonContainer: {
        alignItems: 'center',
        width: width,
    },
    button: {
        width: '90%',
        backgroundColor: '#28AF6E',
        paddingVertical: 18,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    termsText: {
        fontSize: 12,
        color: '#A0A0A0',
        textAlign: 'center',
    },
});

export default GetStarted;
