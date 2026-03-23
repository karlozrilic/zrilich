'use client'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './store/store';
import { fetchTechnologies } from './store/slices/technologiesSlice';
import { fetchProjects } from './store/slices/projectsSlice';
import { fetchExperiences } from './store/slices/experienceSlice';
import Hero from './sections/hero';
import Projects from './sections/projects';
import Contact from './sections/contact';
import LoadingScreen from './sections/loading';

export default function Home() {
    const dispatch = useDispatch<AppDispatch>();
    const projects = useSelector((state: RootState) => state.projects);
    const [loaded, setLoaded] = useState(projects.loaded || false);

    // Fetch data once on mount
    useEffect(() => {
        dispatch(fetchTechnologies());
        dispatch(fetchProjects());
        dispatch(fetchExperiences());
    }, [dispatch]);

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
        

        // PARALLAX
        const parallaxEls = document.querySelectorAll<HTMLDivElement>('.parallax-layer');
        window.addEventListener('scroll', onScroll);

        function onScroll() {
            const scrollTop = window.pageYOffset;
            parallaxEls.forEach(element => {
                const speed = Number(element.dataset.speed);
                const baseTop = element.dataset.baseTop;
                const baseBottom = element.dataset.baseBottom;
                const offset = scrollTop * speed * 0.9;

                if (baseTop !== undefined) {
                    element.style.top = `calc(${baseTop}% + ${offset}px)`;
                }

                if (baseBottom !== undefined) {
                    element.style.bottom = `calc(${baseBottom}% - ${offset}px)`;
                }

                element.classList.remove('hidden');
            });
        }
        
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
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
