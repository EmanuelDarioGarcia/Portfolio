import React from 'react';
import BannerImg from '../assets/img/banner-ema2.png';

const Hero = () => {
    return (
        <section
            id='home'
            className='lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden'
        >
            <div className='container mx-auto h-full'>
                <div className='flex items-center h-full pt-8'>
                    {/*leftside */}
                    <div className='flex-1 flex flex-col items-center lg:items-start'>
                        <p className='text-lg text-accent mb-[22px]'>Hello - Ciao - Barev - Namaste - Bonjour - Salam - Nǐ hǎo - Hola - привіт</p>
                        <h1 className='text-4xl leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]'>
                            I Build & Design<br />Web Interfaces.
                        </h1>
                        <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-lg text-center lg:text-left'>Passionate Software Engineer with experience building web applications. Proficcient in full - stack development. Interested in IT and everything in its circle, courteous and enthusiastic.</p>
                        <button className='btn btn-md bg-accent hover:bg-accent-hover mb:btn-lg transition-all'>Work with me!</button>
                    </div>
                    {/*rightside */}
                    <div className='hidden lg:flex flex-1 justify-end items-end h-full'>
                        <img src={BannerImg} alt=''/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;