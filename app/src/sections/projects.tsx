'use client'
import { useEffect, useState } from 'react';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import { BentoCard, BentoGrid } from '@/app/src/components/ui/bento-grid';
import Image from 'next/image';
import { AspectRatio } from '../components/ui/aspect-ratio';

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('private project');
    const [projects, setProjects] = useState<Project[]>([]);

    const { data } = useSelector((state: RootState) => state.projects);

    useEffect(() => {
        const filtered = data.filter(project => project.tags.map(tag => tag.toLowerCase()).includes(activeFilter));
        setProjects(filtered);
    }, [data]);

    return (
        <>
            <span id='projects'></span>
            <section className='relative bg-secondary text-secondary-foreground fade-in px-1' id='projects'>
                <div className='container mx-auto py-10 md:py-20'>
                    <h2 className='text-4xl font-bold text-center mb-10'>Projects</h2>
                    <BentoGrid className='m-auto'>
                        {projects.map((project, index) => 
                            <BentoCard
                                key={index}
                                name={project.title}
                                description={project.description}
                                background={
                                    <AspectRatio
                                        ratio={16 / 9}
                                        className='flex items-center'
                                    >
                                        <Image
                                            src={`/images/${project.image}.svg`}
                                            alt={`${project.title} logo`}
                                            width={100}
                                            height={100}
                                            className='w-full h-full object-contain scale-80 [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] transition-all duration-300 ease-out group-hover:scale-100'
                                        />
                                    </AspectRatio>
                                }
                                href={project.link}
                                className='project-item'
                            />
                        )}
                    </BentoGrid>
                </div>
            </section>
        </>
    );
}