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

export const selectWordsError = state => state.words.error;

export const selectWordsIsLoading = state => state.words.isLoading; 

