import react from 'react';
import { createSlice } from '@reduxjs/toolkit';

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem('theme');
  return savedTheme === 'dark' ? 'dark' : 'light';
};

const initialState = {
    theme: getInitialTheme(),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light";
            localStorage.setItem('theme', state.theme);
        },
    },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;