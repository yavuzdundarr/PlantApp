import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getQuestions, getCategories } from '../api/api';

interface Question {
    id: number;
    title: string;
    subtitle: string;
    image_uri: string;
    uri: string;
    order: number;
}

interface Category {
    id: number;
    name: string;
    title: string;
    image: { url: string };
}

interface HomeState {
    questions: Question[];
    categories: Category[];
    loading: boolean;
    error: string | null;
}

const initialState: HomeState = {
    questions: [],
    categories: [],
    loading: false,
    error: null,
};

export const fetchHomeData = createAsyncThunk(
    'home/fetchHomeData',
    async (_, { rejectWithValue }) => {
        try {
            const questions = await getQuestions();
            const categories = await getCategories();
            return { questions, categories };
        } catch (error) {
            return rejectWithValue('Failed to fetch home data');
        }
    }
);

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.questions = action.payload.questions;
                state.categories = action.payload.categories;
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default homeSlice.reducer;
