const BASE_URL = 'https://dummy-api-jtg6bessta-ey.a.run.app';

export const getCategories = async () => {
    const response = await fetch(`${BASE_URL}/getCategories`);
    const data = await response.json();
    return data.data;
};

export const getQuestions = async () => {
    const response = await fetch(`${BASE_URL}/getQuestions`);
    return await response.json();
};
