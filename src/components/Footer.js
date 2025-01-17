import React from 'react';
//data
import { social } from '../data';
//logo
import Logo from '../assets/img/logo3.svg';

const Footer = () => {
    return (
        <footer className='bg-tertiary py-12'>
            <div className='container mx-auto'>
                <div className='flex flex-col lg:flex-row space-y-2 lg:space-y-0 items-center justify-between'>
                    {/* social icons */}
                    <div className='flex space-x-6 items-center justify-center'>
                        {social.map((item, index) => {
                            const {href, icon} = item;
                            return (
                                <a className='text-accent text-base' href={href} key={index}> {icon}</a>
                            )
                        })}
                    </div>
                    {/* logo */}
                    <div>
                        <img className='h-[200px] w-[200px]' src={Logo} alt='' />
                    </div>
                    {/* copyright */}
                    <p>Copyright: 2023 Emanuel Dario Garcia. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
};

export default Footer