'use client'
import { Button } from '@/app/src/components/ui/button'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useWebHaptics } from 'web-haptics/react';

export default function Hero() {
    const { trigger } = useWebHaptics();

    return (
        <section
            className='relative overflow-hidden min-h-svh pt-[68px] flex items-center'
            id='hero'
        >
            <div className='container relative mx-auto px-6 py-14 md:py-24'>
                <h1 className='font-display text-6xl md:text-8xl font-semibold tracking-tight leading-[0.95]'>
                    ZrilicH<span className='text-brand'>.</span>
                </h1>

                <p className='mt-6 text-2xl md:text-3xl font-medium'>
                    Websites and apps I've built.
                </p>
                <p className='mt-3 max-w-xl text-lg text-muted-foreground leading-relaxed'>
                    A collection of my own projects, designed, built and shipped from the first sketch to the store listing.
                </p>

                <div className='mt-10'>
                    <Button
                        size='lg'
                        className='bg-brand text-black font-semibold hover:bg-brand/90'
                        onClick={() => {
                            trigger('success');
                            document.querySelector('#projects')?.scrollIntoView();
                        }}
                    >
                        See projects
                        <FontAwesomeIcon icon={faArrowDown} className='text-sm' />
                    </Button>
                </div>
            </div>
        </section>
    );
}
