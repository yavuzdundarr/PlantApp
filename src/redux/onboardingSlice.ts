import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface OnboardingState {
    currentStep: number;
    completed: boolean;
    loading: boolean;
}

const initialState: OnboardingState = {
    currentStep: 1,
    completed: false,
    loading: true,
};

export const fetchOnboardingStatus = createAsyncThunk(
    'onboarding/fetchStatus',
    async () => {
        const status = await AsyncStorage.getItem('onboardingCompleted');
        return status === 'true';
    }
);

export const completeOnboardingAsync = createAsyncThunk(
    'onboarding/completeAsync',
    async () => {
        await AsyncStorage.setItem('onboardingCompleted', 'true');
        return true;
    }
);

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
    },
    extraReducers: (builder) => {
        builder.addCase(fetchOnboardingStatus.fulfilled, (state, action) => {
            state.completed = action.payload;
            state.loading = false;
        });
        builder.addCase(completeOnboardingAsync.fulfilled, (state) => {
            state.completed = true;
        });
    },
});

export const { setStep, nextStep, previousStep } = onboardingSlice.actions;

export default onboardingSlice.reducer;
