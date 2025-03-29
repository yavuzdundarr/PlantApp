import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStarted from '../screens/Onboarding/GetStarted';
import OnboardingStepOne from '../screens/Onboarding/OnboardingStepOne.tsx';
import OnboardingStepTwo from '../screens/Onboarding/OnboardingStepTwo.tsx';
import PaywallScreen from '../screens/Onboarding/PaywallScreen.tsx';
import HomeScreen from '../screens/Home/HomeScreen.tsx';

export type RootStackParamList = {
    GetStarted: undefined;
    OnboardingStepOne: undefined;
    OnboardingStepTwo: undefined;
    PaywallScreen: undefined;
    HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="GetStarted" screenOptions={{ headerShown: false }}>
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
