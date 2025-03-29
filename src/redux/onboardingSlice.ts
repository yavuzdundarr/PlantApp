import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface OnboardingState {
    currentStep: number;
    completed: boolean;
}

const initialState: OnboardingState = {
    currentStep: 1,
    completed: false,
};

const onboardingSlice = createSlice({
    name: 'onboarding',
    initialState,
    reducers: {
        setStep(state, action: PayloadAction<number>) {
            state.currentStep = action.payload;
        },
        nextStep(state) {
            state.currentStep += 1;
        },
        previousStep(state) {
            state.currentStep -= 1;
        },
        completeOnboarding(state) {
            state.completed = true;
        },
    },
});

export const { setStep, nextStep, previousStep, completeOnboarding  } = onboardingSlice.actions;

export default onboardingSlice.reducer;
