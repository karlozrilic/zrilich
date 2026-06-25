'use client'

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/src/store/store';
import { fetchProjects } from '@/app/src/store/slices/projectsSlice';

export default function GlobalDataLoader() {
    const dispatch = useDispatch<AppDispatch>();
    const projectsStatus = useSelector((state: RootState) => state.projects.status);

    useEffect(() => {
        if (projectsStatus === 'idle') {
            dispatch(fetchProjects())
        }
    }, [dispatch, projectsStatus])

    return null;
}