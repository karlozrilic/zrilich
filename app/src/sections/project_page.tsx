'use client'
import Image from 'next/image';
import { useEffect } from 'react';

export default function ProjectPage() {
    useEffect(() => {
        // FADE-IN
        const faders = document.querySelectorAll('.fade-in');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if(entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, {threshold: 0.2});
        faders.forEach(f => observer.observe(f));

        // PARALLAX
        const parallaxEls = document.querySelectorAll<HTMLDivElement>('.parallax-layer');
        window.addEventListener('scroll', onScroll);

        function onScroll() {
            const scrollTop = window.pageYOffset;
            parallaxEls.forEach(element => {
                const speed = Number(element.dataset.speed);
                element.style.top = `${scrollTop * speed}px`;
                element.classList.remove('hidden');
            });
        }
        
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <main className='flex min-h-screen flex-col items-center justify-center gap-6 pt-24 p-4'>
            <div className='relative'>
                <Image
                    className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-5'
                    src='/images/banana/banana.png'
                    alt='Banana Logo'
                    width={180}
                    height={37}
                    priority
                />
                <a href='https://play.google.com/store/apps/details?id=com.zrilich.banana'>
                    <Image
                        className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
                        src='/images/banana/gp.png'
                        alt='Get it on Google Play'
                        width={180}
                        height={37}
                        priority
                    />
                </a>
            </div>

            <div className='z-10 w-full max-w-5xl items-center justify-center flex-wrap gap-4 font-mono text-sm flex'>
                <a
                    href='/banana/privacy-policy'
                    className='absolute left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto  rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30'
                >
                    Privacy Policy
                </a>
                <a
                    href='/banana/terms-of-service'
                    className='absolute left-0 top-0 flex justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit static w-auto  rounded-xl border bg-gray-200 p-4 dark:bg-zinc-800/30'
                >
                    Terms of Service
                </a>
            </div>
        </main>
    );
}
