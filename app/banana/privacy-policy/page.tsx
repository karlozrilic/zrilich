'use client'
import { useEffect, useState } from 'react';
import LoadingScreen from '@/app/sections/loading';

export default function Banana() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    return (
        <>
            {loading && <LoadingScreen />}
            <main className='flex min-h-screen flex-col items-center p-24'>
                <h1 className='text-4xl font-bold text-center mb-10'>Privacy policy</h1>
                <p>Work in progress</p>
            </main>
        </>
    );
}
