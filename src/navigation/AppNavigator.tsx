import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../redux/store';
import { fetchOnboardingStatus } from '../redux/onboardingSlice';

import GetStarted from '../screens/Onboarding/GetStarted';
import OnboardingStepOne from '../screens/Onboarding/OnboardingStepOne';
import OnboardingStepTwo from '../screens/Onboarding/OnboardingStepTwo';
import PaywallScreen from '../screens/Onboarding/PaywallScreen';
import HomeScreen from '../screens/Home/HomeScreen';

export type RootStackParamList = {
    GetStarted: undefined;
    OnboardingStepOne: undefined;
    OnboardingStepTwo: undefined;
    PaywallScreen: undefined;
    HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { completed, loading } = useSelector((state: RootState) => state.onboarding);

    useEffect(() => {
        dispatch(fetchOnboardingStatus());
    }, [dispatch]);

    if (loading) return null;

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={completed ? 'HomeScreen' : 'GetStarted'}
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="GetStarted" component={GetStarted} />
                <Stack.Screen name="OnboardingStepOne" component={OnboardingStepOne} />
                <Stack.Screen name="OnboardingStepTwo" component={OnboardingStepTwo} />
                <Stack.Screen name="PaywallScreen" component={PaywallScreen} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
