'use client'
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/src/store/store';
import Hero from '@/app/src/sections/hero';
import Projects from '@/app/src/sections/projects';
import Contact from '@/app/src/sections/contact';
import LoadingScreen from '@/app/src/sections/loading';

export default function Home() {
    const projects = useSelector((state: RootState) => state.projects);
    const [loaded, setLoaded] = useState(projects.loaded || false);

    useEffect(() => {
        setLoaded(projects.loaded)
    }, [projects.loaded]);

    useEffect(() => {
        // FADE-IN
        const faders = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0,
            rootMargin: '0px 0px -15% 0px',
        });
        faders.forEach(f => observer.observe(f));

        return () => {
            faders.forEach(f => observer.unobserve(f));
        }
    }, []);

    return (
        <>
            {!loaded && <LoadingScreen />}
            <Hero />
            <Projects />
            <Contact />
        </>
    );
}
