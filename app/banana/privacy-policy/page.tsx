'use client'
import { useEffect, useState } from 'react';
import LoadingScreen from '@/app/src/sections/loading';
import Image from 'next/image';

export default function Banana() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    });

    return (
        <>
            {/* loading && <LoadingScreen /> */}
            <main className='flex min-h-screen flex-col items-center justify-center pt-24 pb-10 p-4'>
                <div className='max-w-3xl w-full'>
                    <div className='flex justify-center pb-16'>
                        <Image
                            className='relative dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
                            src='/images/banana/banana.png'
                            alt='Banana Logo'
                            width={180}
                            height={37}
                            priority
                        />
                    </div>
                    <h1 className='text-4xl font-bold text-center mb-10'>
                        Privacy Policy
                    </h1>
                    <div className='space-y-8 text-left'>
                        <p className='text-lg text-primary'>
                            Effective Date: May 4, 2026
                        </p>
                        <p className='text-lg text-primary'>
                            Thank you for playing Banana.
                            Your privacy is important to us.
                            This policy explains what information we collect and how we use it.
                        </p>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Information We Collect
                            </h2>
                            <p className='text-lg text-primary'>
                                We do not directly collect or store personal data from users.
                                The application does not require the creation of a separate account to access its core features.
                            </p>
                            <p className='text-lg text-primary'>
                                However, the application integrates Google Sign-In for the limited purpose of enabling achievements and saving game progress.
                                If you choose to sign in through your Google account, certain information (such as your basic profile details) may be accessed and processed in accordance with Google's applicable privacy policies.
                            </p>
                            <p className='text-lg text-primary'>
                                Gameplay data is primarily stored locally on your device.
                                Where applicable, such data may also be synchronized with your Google account to support cloud saving and cross-device functionality.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Analytics
                            </h2>
                            <p className='text-lg text-primary'>
                                We may use anonymous analytics (like Firebase or similar) to understand how the app is used and improve the experience. These analytics do not contain any personally identifiable information.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Data Sharing
                            </h2>
                            <p className='text-lg text-primary'>
                                We do not sell, trade, or share your personal information. Since we do not collect personal information, there's nothing to share.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Third-Party Services
                            </h2>
                            <p className='text-lg text-primary'>
                                If the app includes links to social media for sharing (e.g. WhatsApp, Twitter), please review their privacy policies. We are not responsible for how they handle your data.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Children's Privacy
                            </h2>
                            <p className='text-lg text-primary'>
                                This game is intended for general audiences. We do not knowingly collect personal information from children under 13.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Changes to This Policy
                            </h2>
                            <p className='text-lg text-primary'>
                                We may update this policy from time to time. If we make material changes, we will notify you within the app or on our website.
                            </p>
                        </section>
                        <section className='space-y-4'>
                            <h2 className='text-2xl font-bold text-primary'>
                                Contact Us
                            </h2>
                            <p className='text-lg text-primary'>
                                If you have any questions about this Privacy Policy, please contact us using one of provided channels in the app or on our website.
                            </p>
                        </section>
                    </div>
                    <div className='mt-12 text-center'>
                        <a
                            className='inline-block text-primary hover:underline'
                            href='/banana'
                        >← Back</a>
                    </div>
                </div>
            </main>
        </>
    );
}
