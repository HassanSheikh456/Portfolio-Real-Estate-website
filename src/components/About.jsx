import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}


            className='container flex flex-col justify-center items-center 
        mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>

            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 
            decoration-1 under font-light'>Our Brand</span></h1>

            <p className='text-gray-500 max-w-80 mb-8 text-center '>Passionate About Properties,
                Dedicated to Your Vission </p>

            <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>

                <img src={assets.brand_img} alt="" className='w-full sm:w-1/2 max-w-lg' />

                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md-gap-10 w-full 2xl:pr-28'>
                        {[
                            { title: "10+", description: "Years of Excelence" },
                            { title: "12+", description: "Projects Completed" },
                            { title: "20+", description: "Mn. Sq. Ft. Delivered" },
                            { title: "25+", description: "Ongoing Projects" },
                        ].map(({ title, description }, index) => (
                            <div key={index}>
                                <h1 className='text-4xl font-medium text-grey-800'>{title}</h1>
                                <p>{description}</p>
                            </div>
                        ))}
                    </div>

                    <p className='my-10 max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique aliquid deleniti distinctio,
                        impedit incidunt consequatur iste dolores at libero sint unde mollitia a delectus repudiandae
                        sequi enim reprehenderit? Sint labore, aliquid enim impedit inventore dicta optio asperiores
                        at?
                    </p>
                    <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>

                </div>

            </div>

        </motion.div>
    )
}

export default About
