import homeReducer, { fetchHomeData } from '../src/redux/homeSlice';
import { getQuestions, getCategories } from '../src/api/api';

jest.mock('../src/api/api', () => ({
    getQuestions: jest.fn(),
    getCategories: jest.fn(),
}));

const mockedGetQuestions = getQuestions as jest.MockedFunction<typeof getQuestions>;
const mockedGetCategories = getCategories as jest.MockedFunction<typeof getCategories>;

describe('homeSlice', () => {
    const initialState = {
        questions: [],
        categories: [],
        loading: false,
        error: null,
    };

    it('should handle initial state', () => {
        expect(homeReducer(undefined, { type: 'unknown' })).toEqual(initialState);
    });

    it('should handle fetchHomeData.pending', () => {
        const action = { type: fetchHomeData.pending.type };
        const state = homeReducer(initialState, action);
        expect(state.loading).toBe(true);
        expect(state.error).toBeNull();
    });

    it('should handle fetchHomeData.fulfilled', () => {
        const payload = {
            questions: [{ id: 1, title: 'test', subtitle: '', image_uri: '', uri: '', order: 1 }],
            categories: [{ id: 1, name: 'test', title: '', image: { url: '' } }],
        };

        const action = { type: fetchHomeData.fulfilled.type, payload };
        const state = homeReducer(initialState, action);

        expect(state.loading).toBe(false);
        expect(state.questions).toEqual(payload.questions);
        expect(state.categories).toEqual(payload.categories);
    });

    it('should handle fetchHomeData.rejected', () => {
        const action = { type: fetchHomeData.rejected.type, payload: 'Error message' };
        const state = homeReducer(initialState, action);
        expect(state.loading).toBe(false);
        expect(state.error).toEqual('Error message');
    });
});
