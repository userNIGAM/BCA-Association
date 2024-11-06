'use client'
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionHeader from './SectionHeader';

export default function ContactSection() {
    const testimonials = [
        {
            photo: '/images/testimonial1.jpg',
            message: "This is an amazing service! I loved how easy it was to use.",
            name: "John Doe",
            post: "CEO, Company X"
        },
        {
            photo: '/images/testimonial2.jpg',
            message: "I would highly recommend it to everyone.",
            name: "Jane Smith",
            post: "Marketing Head, Company Y"
        },
        {
            photo: '/images/testimonial3.jpg',
            message: "Fantastic experience, the customer support is excellent.",
            name: "Mike Johnson",
            post: "Manager, Company Z"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = testimonials.length;
    let slideInterval;

    useEffect(() => {
        AOS.init({ duration: 1200, once: false });

        // Start auto-swipe
        startAutoSwipe();

        return () => {
            stopAutoSwipe();
        };
    }, [currentSlide]);

    const startAutoSwipe = () => {
        slideInterval = setInterval(() => {
            nextSlide();
        }, 5000);
    };

    const stopAutoSwipe = () => {
        clearInterval(slideInterval);
    };

    const showSlide = (index) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((currentSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        setCurrentSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    return (
        <section id="contact" className="relative py-16 bg-gray-800 ">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-white">
                {/* <img
                    src="/images/contact_bg.jpg"
                    alt="Background Image"
                    className="w-full h-full object-cover bg-cover opacity-20 animate-fadeIn"
                /> */}
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4" data-aos="zoom-in">
                {/* Heading */}
                <SectionHeader title="Get in Touch"/>

                {/* Flex Container */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Testimonials Carousel */}
                    <div className="lg:w-1/3 flex flex-col items-center" data-aos="fade-up">
                        <div className="w-full h-auto max-w-md bg-gradient-to-r from-blue-500 to-blue-900 text-white rounded-lg shadow-xl overflow-hidden relative p-6">
                            <div className="carousel relative overflow-hidden">
                                <div className="carousel-inner relative w-full overflow-hidden">
                                    {/* Carousel Slides */}
                                    {testimonials.map((testimonial, index) => (
                                        <div
                                            key={index}
                                            className={`carousel-item ${index === currentSlide ? 'block' : 'hidden'} transition-transform duration-700 ease-in-out transform-gpu scale-105`}
                                        >
                                            <div className="flex items-center">
                                                <img
                                                    src={testimonial.photo}
                                                    alt={testimonial.name}
                                                    className="w-16 h-16 rounded-full border-4 border-white mr-4 shadow-lg"
                                                />
                                                <div>
                                                    <p className="text-base font-semibold mb-2 italic leading-tight">
                                                        "{testimonial.message}"
                                                    </p>
                                                    <p className="text-sm opacity-75">- {testimonial.name}, {testimonial.post}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Carousel Navigation */}
                                <button
                                    className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-white text-yellow-500 p-2 rounded-full shadow-lg carousel-prev hover:bg-yellow-500 hover:text-white transition-all"
                                    onClick={prevSlide}
                                >
                                    <i className="bx bx-chevron-left"></i>
                                </button>
                                <button
                                    className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white text-yellow-500 p-2 rounded-full shadow-lg carousel-next hover:bg-yellow-500 hover:text-white transition-all"
                                    onClick={nextSlide}
                                >
                                    <i className="bx bx-chevron-right"></i>
                                </button>

                                {/* Carousel Indicators */}
                                <div className="flex justify-center mt-4">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            className={`carousel-indicator bg-white rounded-full w-2 h-2 mx-1 ${index === currentSlide ? 'bg-yellow-500' : ''}`}
                                            onClick={() => showSlide(index)}
                                        ></button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-1/3 bg-transparent text-gray-800 rounded-lg shadow-lg p-6" data-aos="fade-right">
                        <h3 className="text-xl font-bold mb-4 animate-fadeIn">Contact Us</h3>
                        <form action="#" method="POST" className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm animate-fadeInUp"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm animate-fadeInUp"
                            />
                            <textarea
                                name="message"
                                rows="3"
                                placeholder="Your Message"
                                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-sm animate-fadeInUp"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full bg-blue-900 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300 text-sm animate-bounceIn"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    
                </div>
            </div>
        </section>
    );
}
