import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer from './onboardingSlice';
import homeReducer from './homeSlice';

const rootReducer = {
    onboarding: onboardingReducer,
    home: homeReducer,
};

export const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
