import React from 'react'

const Testimonial = () => {
    const testimony = [
        {
            id: 1,
            name: "Ada",
            feedback: "The egusi soup tasted just like home! You can tell it was made fresh — clean, flavorful, and perfectly spiced. I’ll definitely order again.",
            img: ''
        },
        {
            id: 2,
            name: "Kemi",
            feedback: "The egusi soup tasted just like home! You can tell it was made fresh — clean, flavorful, and perfectly spiced. I’ll definitely order again.",
            img: ''
        },
        {
            id: 3,
            name: "Femi",
            feedback: " The egusi soup tasted just like home! You can tell it was made fresh — clean, flavorful, and perfectly spiced. I’ll definitely order again.",
            img: ''
        }
    ];
    return (
        <section>
            <div className="max-w-5xl mx-auto">
                <h3 className="text-2xl font-medium">Testimonials</h3>
                <div className="grid lg:grid-cols-3 space-x-4 my-4">
                    {testimony.map((items) => (
                        <div className="bg-white px-4 py-6 rounded-br-lg rounded-tl-lg" key={items.id}>
                            <p className="leading-relaxed text-accent-foreground text-lg font-medium">
                                {items.feedback}
                            </p>
                            <div className="flex justify-between items-center mt-4">
                                <h2 className="font-bold text-lg">{items.name}</h2>
                                <div className="rounded-full flex items-center justify-center w-12 h-12 bg-red-200"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonial