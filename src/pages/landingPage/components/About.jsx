import React from 'react'
import Food from '../../../assets/ricebeans.jpg'
const About = () => {
    return (
        <section className='mt-15'>
            <div className="max-w-5xl mx-auto">
                <h2 className="text-2xl font-medium">About Us</h2>
                <div className="py-4 flex justify-center items-center space-x-8">
                    <div className="w-3xl h-80 bg-cover bg-center bg-no-repeat rounded-tl-lg rounded-br-lg" style={{
                        backgroundImage: `url(${Food})`
                    }}>
                    </div>
                    <div className="max-w-lg">
                        <p className="text-lg font-medium leading-tight">
                            At Susan’s flavored kitchen we believe good food starts with care — care for ingredients, for hygiene, and for the people we serve. <br />
                            From classic Nigerian rice dishes to rich soups, refreshing drinks, and baked treats, every meal is freshly prepared using high-quality ingredients and strict hygiene standards.
                            Whether you’re ordering for yourself or hosting a large event, our promise remains the same: authentic taste, freshness, and safe preparation in every bite.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About