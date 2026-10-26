'use client'
import { Button } from '@/app/src/components/ui/button'
import { Marquee } from '@/app/src/components/ui/marquee';
import Image from 'next/image';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { useWebHaptics } from 'web-haptics/react';
import { RootState } from '@/app/src/store/store';
import { ownProjects } from '@/app/src/store/slices/projectsSlice';

// below this a scrolling strip would just show the same few icons on repeat
const MARQUEE_MIN = 4;

function AppIcon({ project }: { project: Project }) {
    return (
        <a
            href={project.link}
            target={/^https?:\/\//.test(project.link) ? '_blank' : '_self'}
            className='group flex w-24 md:w-28 shrink-0 flex-col items-center gap-2'
        >
            <span className='size-24 md:size-28 rounded-[22%] bg-neutral-100 dark:bg-neutral-200 shadow-[0_1px_2px_rgba(0,0,0,.06),0_8px_24px_rgba(0,0,0,.08)] p-4 transition-transform duration-300 ease-out group-hover:-translate-y-1'>
                <Image
                    src={`/images/projects/${project.image}.svg`}
                    alt=''
                    width={112}
                    height={112}
                    className='size-full object-contain'
                />
            </span>
            <span className='text-sm font-medium text-center line-clamp-1'>{project.title}</span>
        </a>
    );
}

export default function Hero() {
    const { trigger } = useWebHaptics();
    const projects = ownProjects(useSelector((state: RootState) => state.projects.data));

    return (
        <section
            className='relative overflow-hidden min-h-svh pt-[68px] flex flex-col justify-center'
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

                {projects.length > 0 && projects.length < MARQUEE_MIN &&
                    <div className='mt-14 flex flex-wrap gap-6'>
                        {projects.map(project => <AppIcon key={project.title} project={project} />)}
                    </div>
                }
            </div>

            {projects.length >= MARQUEE_MIN &&
                <Marquee
                    pauseOnHover
                    className='pb-14 [--duration:50s] [--gap:1.5rem] [mask-image:linear-gradient(to_right,transparent,#000_10%,#000_90%,transparent)]'
                >
                    {projects.map(project => <AppIcon key={project.title} project={project} />)}
                </Marquee>
            }
        </section>
    );
}
