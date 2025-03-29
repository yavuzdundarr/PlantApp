import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore } from '@reduxjs/toolkit';
import onboardingReducer, { fetchOnboardingStatus } from '../src/redux/onboardingSlice';

jest.mock('@react-native-async-storage/async-storage', () => ({
    getItem: jest.fn(),
}));

describe('onboardingSlice thunk actions', () => {
    const setupStore = () => {
        return configureStore({
            reducer: {
                onboarding: onboardingReducer,
            },
        });
    };

    it('fetchOnboardingStatus retrieves onboarding status correctly', async () => {
        (AsyncStorage.getItem as jest.Mock).mockResolvedValue('true');

        const store = setupStore();

        await store.dispatch(fetchOnboardingStatus());

        const state = store.getState().onboarding;

        expect(state.completed).toBe(true);
        expect(state.loading).toBe(false);
        expect(AsyncStorage.getItem).toHaveBeenCalledWith('onboardingCompleted');
    });
});
