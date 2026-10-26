'use client'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SectionHeading from '@/app/src/components/custom/section_heading';

export default function Contact() {
    return (
        <>
            <section className='border-t scroll-mt-[68px] container mx-auto px-6 py-16 md:py-28 fade-in' id='contact'>
                <SectionHeading className='text-center mb-10'>Contact me</SectionHeading>
                <div className='flex justify-center content-center'>
                    <a href='mailto:karlozrilic@gmail.com' aria-label='Email' className='flex flex-wrap content-center'>
                        <FontAwesomeIcon icon={faEnvelope} size='2x' />
                    </a>
                    <a href='https://www.linkedin.com/in/karlo-zrili%C4%87' aria-label='LinkedIn' target='_blank' className='flex flex-wrap content-center'>
                        <FontAwesomeIcon icon={faLinkedin} size='2x' />
                    </a>
                    <a href='https://www.instagram.com/karlo.zrilich' aria-label='Instagram' target='_blank' className='flex flex-wrap content-center'>
                        <FontAwesomeIcon icon={faInstagram} size='2x' />
                    </a>
                </div>
            </section>
        </>
    );
}