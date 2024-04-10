import { createSelector } from "@reduxjs/toolkit";
export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectCategories = state => state.filters.categories;

export const selectSelectedCategory = state => state.filters.selectedCategory;

export const selectSearchKeyword = state => state.filters.searchKeyword;

export const selectSelectedVerbType = state => state.filters.selectedVerbType;

export const selectError = state => state.auth.error;

export const selectIsLoading = state => state.auth.isLoading;

export const selectWords = state => state.words.words;

export const selectVisibleWords = createSelector(
    [selectWords, selectSelectedCategory],
    (words, filters) => {
        if (filters === '') {
            return words;
        }
        if (Array.isArray(words)) {
            return words.filter(word => 
                word.category.toLowerCase().includes(filters.value.toLowerCase())
            );
        }
        console.log('Words:', words);
        console.log('Filters:', filters);
    }
);

// contact.name.toLowerCase().includes(filter.toLowerCase())





export const selectWordsError = state => state.words.error;

export const selectWordsIsLoading = state => state.words.isLoading;

export const selectSelectedWord = state => state.words.selectedWord;

export const selectTasks = state => state.words.tasks;

export const selectAnswers = state => state.words.answers;

export const selectCheckedAnswers = state => state.words.checkedAnswers;

export const selectStatistics = state => state.words.statistics;