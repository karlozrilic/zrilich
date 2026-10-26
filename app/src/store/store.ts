import { combineReducers, configureStore } from '@reduxjs/toolkit';
import projectsReducer from '@/app/src/store/slices/projectsSlice';

const reducer = combineReducers({
    projects: projectsReducer,
});

export const makeStore = (preloadedState?: Partial<RootState>) => configureStore({ reducer, preloadedState });

export type RootState = ReturnType<typeof reducer>;
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];
