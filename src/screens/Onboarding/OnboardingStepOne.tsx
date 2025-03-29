import React, { useEffect } from 'react';
import {View, Image, TouchableOpacity, StyleSheet, Dimensions, SafeAreaView, ImageBackground, Text} from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import CustomText from '../../components/CustomText';
import { setStep } from '../../redux/onboardingSlice';
import CustomPageIndicator from '../../components/CustomPageIndicator';
import {RootStackParamList} from '../../navigation/AppNavigator.tsx';

const { width, height } = Dimensions.get('window');

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'OnboardingStepOne'>;

const OnboardingStepOne: React.FC = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation<NavigationProps>();

    useEffect(() => {
        dispatch(setStep(1));
    }, [dispatch]);

    return (
        <ImageBackground
            source={require('../../assets/images/background2.png')}
            style={styles.background}
            resizeMode="cover"
        >
            <SafeAreaView style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.titleWrapper}>
                        <CustomText style={styles.title} weight="medium">Take a photo to</CustomText>
                        <View style={styles.underlineContainer}>
                            <CustomText style={[styles.title, styles.highlight]} weight="extraBold"> identify </CustomText>
                            <Image
                                source={require('../../assets/images/underline.png')}
                                style={styles.underline}
                                resizeMode="contain"
                            />
                        </View>
                        <CustomText style={styles.title} weight="medium">the plant!</CustomText>
                    </View>
                </View>

                <View style={styles.middleContainer}>
                    <Image source={require('../../assets/images/onboarding1.png')} style={styles.mainImage} resizeMode='contain' />
                </View>

                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('OnboardingStepTwo')} // Geçiş burada gerçekleşiyor
                    >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>

                    <CustomPageIndicator />
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
        paddingVertical: height * 0.06,
        justifyContent: 'space-between',
    },
    topContainer: {
        alignItems: 'flex-start',
        paddingHorizontal: '10%',
    },
    title: {
        fontSize: 28,
        color: '#13231B',
        lineHeight: 34,
        letterSpacing: -1,
    },
    titleWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
    },
    underlineContainer: {
        position: 'relative',
    },
    underline: {
        width: '120%',
        height: 20,
        position: 'absolute',
        bottom: -18,
        left: -10,
        transform: [{ scaleY: 1.2}],
    },
    highlight: {
        color: '#13231B',
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
        marginTop: '40%',
    },
    mainImage: {
        width: width ,
        height: height ,
    },
    bottomContainer: {
        alignItems: 'center',
        paddingBottom: height * 0.02,
    },
    button: {
        backgroundColor: '#28AF6E',
        width: '85%',
        paddingVertical: 22,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 700,
    },
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

export default OnboardingStepOne;
