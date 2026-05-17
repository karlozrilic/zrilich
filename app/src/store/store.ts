import { configureStore } from '@reduxjs/toolkit';
import technologiesReducer from '@/app/src/store/slices/technologiesSlice';
import projectsReducer from '@/app/src/store/slices/projectsSlice';
import experiencesReducer from '@/app/src/store/slices/experienceSlice';

export const store = configureStore({
    reducer: {
        technologies: technologiesReducer,
        projects: projectsReducer,
        experiences: experiencesReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;