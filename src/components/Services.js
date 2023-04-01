import React from 'react'
//data
import { services } from '../data'

const Services = () => {
    return (
        <section id='services' className='section bg-tertiary'>
            <div className='container mx-auto'>
                {/* section title */}
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-services relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-28 before:hidden before:lg-block'>
                        What I do for clients
                    </h2>
                    <p className='subtitle'>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
                {/* item grid */}
                <div className='grid lg:grid-cols-3 gap-14'>
                    {services.map((service, index) => {
                        const {icon, name, description} = service;
                        return(
                            <div 
                                className='bg-secondary p-6 rounded-2xl'
                                key={index}
                            >
                                <div className='text-accent rounded-sm w-12 h-12 flex justify-center items-center mb-24 text-[28px]'>
                                    {icon}
                                </div>
                                <h4 className='text-xl font-medium mb-2'>{name}</h4>
                                <p>{description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
