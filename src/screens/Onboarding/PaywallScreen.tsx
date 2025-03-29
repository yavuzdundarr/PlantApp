import React, { useState, useEffect } from 'react';
import {
    View,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    ScrollView,
    BackHandler,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { completeOnboardingAsync , setStep } from '../../redux/onboardingSlice';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigation/AppNavigator.tsx';
import CustomText from '../../components/CustomText';
import { AppDispatch } from '../../redux/store';

const { width, height } = Dimensions.get('window');

const features = [
    { id: 1, title: 'Unlimited', desc: 'Plant Identify', image: require('../../assets/icons/unlimitedIcon.png') },
    { id: 2, title: 'Faster', desc: 'Process', image: require('../../assets/icons/fasterIcon.png') },
    { id: 3, title: 'Detailed', desc: 'Plant Care', image: require('../../assets/icons/unlimitedIcon.png') },
];

const PaywallScreen: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = useState('yearly');
    const dispatch = useDispatch<AppDispatch>();

    type NavigationProps = NativeStackNavigationProp<RootStackParamList, 'PaywallScreen'>;
    const navigation = useNavigation<NavigationProps>();


    useEffect(() => {
        dispatch(setStep(3));

        const backAction = () => true;
        const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

        return () => backHandler.remove();
    }, [dispatch]);


    const handleClose = async () => {
        await dispatch(completeOnboardingAsync()); // bunu çağır
        navigation.reset({
            index: 0,
            routes: [{ name: 'HomeScreen' }],
        });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <Image source={require('../../assets/images/paywallPlant.png')} style={styles.backgroundImage} />

                <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
                    <Image source={require('../../assets/icons/closeIcon.png')} style={styles.closeIcon} />
                </TouchableOpacity>


                <View style={styles.headerContainer}>
                    <CustomText style={styles.title} weight={'bold'}>PlantApp <CustomText style={styles.premium} weight={'light'}>Premium</CustomText></CustomText>
                    <CustomText style={styles.subtitle} weight={'light'}>Access All Features</CustomText>
                </View>

                <ScrollView
                    horizontal
                    pagingEnabled
                    snapToAlignment="center"
                    decelerationRate="fast"
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.carouselContainer}
                >
                    {features.map((item) => (
                        <View key={item.id} style={styles.featureCard}>
                            <Image source={item.image} style={styles.featureImage} />
                            <CustomText style={styles.featureTitle} weight={'medium'}>{item.title}</CustomText>
                            <CustomText style={styles.featureDesc}>{item.desc}</CustomText>
                        </View>
                    ))}
                </ScrollView>


                <View style={styles.plansContainer}>
                    <TouchableOpacity style={[styles.plan, selectedPlan === 'monthly' && styles.selectedPlan]}
                                      onPress={() => setSelectedPlan('monthly')}>
                        <View style={styles.circle}>{selectedPlan === 'monthly' && <View style={styles.checkedCircle} />}</View>
                        <View>
                            <CustomText style={styles.planTitle} weight={'medium'}>1 Month</CustomText>
                            <CustomText style={styles.planSubtitle} weight={'light'}>$2.99/month, <CustomText style={styles.planSubtitle}>auto renewable</CustomText></CustomText>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.plan, selectedPlan === 'yearly' && styles.selectedPlan]}
                                      onPress={() => setSelectedPlan('yearly')}>
                        <View style={styles.discount}><CustomText style={styles.discountText} weight={'medium'}>Save 50%</CustomText></View>
                        <View style={styles.circle}>{selectedPlan === 'yearly' && <View style={styles.checkedCircle} />}</View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View>
                                <CustomText style={styles.planTitle} weight={'medium'}>1 Year</CustomText>
                                <CustomText style={styles.planSubtitle}>First 3 days free, then $29.99/year</CustomText>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.subscribeButton}>
                    <CustomText style={styles.subscribeButtonText} weight={'medium'}>Try free for 3 days</CustomText>
                </TouchableOpacity>

                <CustomText style={styles.terms} weight={'light'}>
                    After the 3-day free trial period you'll be charged $29.99 per year unless you {'\n'}
                    cancel before the trial expires. Yearly Subscription is Auto-Renewable.
                </CustomText>

                <View style={styles.footerLinks}>
                    <CustomText style={styles.link}>Terms</CustomText>
                    <CustomText style={styles.link}>•</CustomText>
                    <CustomText style={styles.link}>Privacy</CustomText>
                    <CustomText style={styles.link}>•</CustomText>
                    <CustomText style={styles.link}>Restore</CustomText>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#101E17',
    },

    scrollViewContent: {
        alignItems: 'center',
        paddingBottom: 20
    },

    backgroundImage: {
        position: 'absolute',
        top: 0,
        width: width,
        height: height * 0.65,
        resizeMode: 'cover'
    },

    closeButton: {
        position: 'absolute',
        top: height * 0.05,
        right: width * 0.05,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },

    closeIcon: {
        width: 30,
        height: 30,
    },

    headerContainer: {
        alignItems: 'flex-start',
        marginTop: height * 0.36,
        width: '90%',
        paddingHorizontal: width * 0.001,
    },

    title: {
        fontSize: 32,
        color: '#FFFFFF',
        textAlign: 'left'
    },

    premium: {
        color: '#FFFFFF',
    },

    subtitle: {
        color: '#AAA',
        fontSize: 17,
        textAlign: 'left',
        letterSpacing: 0.38
    },

    carouselContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.02,
        marginTop: '5%',
    },

    featureCard: {
        width: width * 0.40,
        height: height * 0.15,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: 14,
        padding: 16,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginHorizontal: 10,
        overflow: 'hidden',
    },

    featureImage: {
        width: 36,
        height: 36,
        marginBottom: 12
    },

    featureTitle: {
        color: '#FFFFFF',
        fontSize: 20,
        letterSpacing: 0.38
    },

    featureDesc: {
        color: '#FFFFFFB2',
        fontSize: 13,
        textAlign: 'center'
    },

    plansContainer: {
        width: '90%',
        marginTop: 20
    },

    plan: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 14,
        marginVertical: 6,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.3)',
        backgroundColor: 'rgba(255,255,255,0.06)',
        overflow: 'hidden',
    },

    selectedPlan: {
        borderColor: '#28AF6E',
        backgroundColor: 'rgba(40,175,110,0.12)',
        borderWidth: 1.5,
    },

    circle: {
        width: 23,
        height: 23,
        borderRadius: 20,
        marginRight: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#28AF6E',
    },

    checkedCircle: {
        width: 8,
        height: 8,
        borderRadius: 7,
        backgroundColor: '#FFF',
    },

    planTitle: {
        color: '#FFFFFF',
        fontSize: 16
    },

    planSubtitle: {
        color: '#FFFFFFB2',
        fontSize: 12
    },

    discount: {
        backgroundColor: '#28AF6E',
        paddingHorizontal: width * 0.025,
        paddingVertical: height * 0.005,
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 12,
        position: 'absolute',
        top: 0,
        right: 0,
    },

    discountText: {
        color: '#FFFFFF',
        fontSize: 12
    },

    subscribeButton: {
        backgroundColor: '#28AF6E',
        borderRadius: 14,
        padding: 16,
        width: '90%',
        alignItems: 'center',
        marginTop: 10
    },

    subscribeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        letterSpacing: -0.24
    },

    terms: {
        color: '#FFFFFF85',
        fontSize: 9,
        textAlign: 'center',
        margin: 10,
        lineHeight: 9 * 1.32,
        letterSpacing: 0,
    },

    footerLinks: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20
    },

    link: {
        color: '#FFFFFF80',
        fontSize: 11
    }
});


export default PaywallScreen;