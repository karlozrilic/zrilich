'use client'
import { RootState } from '@/app/src/store/store';
import { useSelector } from 'react-redux';
import { BentoCard, BentoGrid } from '@/app/src/components/ui/bento-grid';
import Image from 'next/image';
import { AspectRatio } from '@/app/src/components/ui/aspect-ratio';
import SectionHeading from '@/app/src/components/custom/section_heading';
import { ownProjects } from '@/app/src/store/slices/projectsSlice';

export default function Projects() {
    const { data } = useSelector((state: RootState) => state.projects);
    // filtered during render, not in an effect, so the cards end up in the prerendered HTML
    const projects = ownProjects(data);

    return (
        <section className='border-t scroll-mt-[68px] fade-in' id='projects'>
            <div className='container mx-auto px-6 py-16 md:py-28'>
                <SectionHeading className='mb-10 md:mb-14'>Projects</SectionHeading>
                <BentoGrid>
                    {projects.map((project, index) => 
                        <BentoCard
                            key={index}
                            name={project.title}
                            description={project.description}
                            background={
                                <AspectRatio
                                    ratio={16 / 9}
                                    className='flex items-center bg-neutral-100 dark:bg-neutral-200'
                                >
                                    <Image
                                        src={`/images/projects/${project.image}.svg`}
                                        alt={`${project.title} logo`}
                                        width={100}
                                        height={100}
                                        onError={(e) => {
                                            e.currentTarget.src = `/images/projects/${project.image}.png`;
                                        }}
                                        className='w-full h-full object-contain scale-75 transition-transform duration-300 ease-out group-hover:scale-80'
                                    />
                                </AspectRatio>
                            }
                            href={project.link}
                            className='project-item h-full'
                        />
                    )}
                </BentoGrid>
            </div>
        </section>
    );
}