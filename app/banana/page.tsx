'use client'
import ProjectPage from '../src/sections/project_page';
import { useEffect, useState } from 'react';
import LoadingScreen from '../src/sections/loading';

export default function Banana() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    return (
        <>
            {/* loading && <LoadingScreen /> */}
            <ProjectPage />
        </>
    );
}
