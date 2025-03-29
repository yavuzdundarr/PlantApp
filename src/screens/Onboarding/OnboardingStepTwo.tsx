import React, { useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ImageBackground,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { setStep } from '../../redux/onboardingSlice';
import CustomPageIndicator from '../../components/CustomPageIndicator';
import CustomText from '../../components/CustomText';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator.tsx';
import {useNavigation} from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'OnboardingStepTwo'>;

const OnboardingStepTwo: React.FC = () => {
    const dispatch = useDispatch();

    const navigation = useNavigation<NavigationProps>();

    useEffect(() => {
        dispatch(setStep(2));
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
                        <CustomText style={styles.title} weight="medium">
                            Get plant
                        </CustomText>

                        <View style={styles.underlineContainer}>
                            <CustomText style={[styles.title, styles.highlight]} weight="extraBold">
                                care guides
                            </CustomText>

                            {/* Sahte gölge */}
                            <Image
                                source={require('../../assets/images/underline.png')}
                                style={[styles.underline, styles.underlineShadow]}
                                resizeMode="contain"
                            />

                            <Image
                                source={require('../../assets/images/underline.png')}
                                style={styles.underline}
                                resizeMode="contain"
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.middleContainer}>
                    <Image
                        source={require('../../assets/images/backgroundLeaf.png')}
                        style={styles.backgroundLeaf}
                        resizeMode="contain"
                        blurRadius={15}
                    />

                    <View style={styles.phoneContainer}>
                        <Image
                            source={require('../../assets/images/artwork.png')}
                            style={styles.plantImages}
                            resizeMode="contain"
                        />
                        <Image
                            source={require('../../assets/images/flatPhone.png')}
                            style={styles.flatPhone}
                            resizeMode="contain"
                        />
                    </View>
                </View>

                <Image source={require('../../assets/images/overlay.png')} style={styles.overlay} resizeMode="cover" />

                <View style={styles.bottomContainer}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate('PaywallScreen')} // Geçiş burada gerçekleşiyor
                     >
                        <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    <CustomPageIndicator />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default OnboardingStepTwo;

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    container: {
        flex: 1,
    },

    topContainer: {
        marginTop: height * 0.07,
        marginLeft: width * 0.08,
        width: width * 0.7,
        justifyContent: 'center',
    },
    titleWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        color: '#13231B',
        lineHeight: 34,
        letterSpacing: -1,
        textShadowColor: 'rgba(0, 0, 0, 0.3)',
        textShadowOffset: { width: 0, height: 4 },
        textShadowRadius: 4,
    },
    highlight: {
        color: '#13231B',
    },
    underlineContainer: {
        position: 'relative',
        marginLeft: 6,
    },
    underline: {
        width: width * 0.4,
        height: height * 0.015,
        position: 'absolute',
        bottom: -height * 0.02,
        left: 0,
        transform: [{ scaleY: 0.8 }],
    },
    underlineShadow: {
        position: 'absolute',
        bottom: -height * 0.023,
        left: 0,
        opacity: 0.3,
        tintColor: 'black',
        width: width * 0.4,
        height: height * 0.015,
    },

    backgroundLeaf: {
        position: 'absolute',
        top: -height * 0.28,
        left: -width * 0.25,
        width: width * 1.8,
        height: height * 0.9,
        transform: [{ rotate: '73.6deg' }],
        opacity: 0.6,
        resizeMode: 'contain',
    },

    middleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '25%',
    },

    phoneContainer: {
        width: width * 0.682,
        height: height * 0.682,
        position: 'relative',
    },

    flatPhone: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },

    plantImages: {
        position: 'absolute',
        top: -height * 0.05,
        right: -width * 0.15,
        resizeMode: 'contain',
        zIndex: 10,
    },

    overlay: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: height * 0.3,
    },

    bottomContainer: {
        alignItems: 'center',
        bottom: '5%',
    },
    button: {
        backgroundColor: '#28AF6E',
        width: '85%',
        paddingVertical: 22,
        marginBottom: height * 0.045,
        borderRadius: 14,
        alignItems: 'center',

    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
