import React from 'react';
import TestimonialSlider from '../components/TestimonialSlider';

const Testimonials = () => {
    return (
        <section id='testimonials' className='section bg-secondary'>
            <div className='container mx-auto'>    
                <div className='flex flex-col items-center text-center'>
                    <h2 className='section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block'>What other people say</h2>
                    <p className='subtitle'>"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.  Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."</p>
                </div>
                <TestimonialSlider />
            </div>
        </section>
    )
}

export default Testimonials
