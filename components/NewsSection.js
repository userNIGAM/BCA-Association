'use client'
import { useEffect } from 'react';
import Slider from "react-slick";
import News from "./News";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function NewsSection() {
    const newsData = [
        { 
            id:'1',
            title: "Tech Conference 2024", 
            description: "Join us for the largest tech conference of the year, showcasing the latest advancements in technology and innovation.", 
            date: "2024-11-05", 
            image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
        },
        { 
            id:'2',
            title: "New AI Breakthrough", 
            description: "Researchers have made a groundbreaking discovery in artificial intelligence, pushing the boundaries of what's possible.", 
            date: "2024-11-04", 
            image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
        },
        { 
            id:'3',
            title: "Startup Funding Alert", 
            description: "Several tech startups received significant funding to continue developing revolutionary products and services.", 
            date: "2024-11-03", 
            image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
        },
        { 
            id:'4',
            title: "Blockchain in Finance", 
            description: "How blockchain technology is transforming the financial industry and what it means for the future of money.", 
            date: "2024-11-02", 
            image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
        },
        { 
            id:'5',
            title: "Climate Tech Innovations", 
            description: "A look at the latest innovations in climate technology aimed at tackling global environmental challenges.", 
            date: "2024-11-01", 
            image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
        },
        { 
            id:'6',
            title: "Future of Work", 
            description: "Exploring the future of remote work, automation, and AI in the workplace.", 
            date: "2024-10-31", 
            image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,               // Enable autoplay
        autoplaySpeed: 3000,          // Set autoplay speed to 3 seconds (3000 ms)
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    useEffect(() => {
        AOS.init({ duration: 1200, once: false }); // Initialize AOS
    }, []);

    return (
        <div className="py-8 px-4 rounded-lg max-w-6xl mx-auto text-center" data-aos="fade-up">
            <SectionHeader title="News & Notices" />
            <Slider {...settings}>
                {newsData.map((newsItem, index) => (
                    <div key={index} className="px-2 m-5" data-aos="zoom-in">
                        <Link href={`/news/${index}`}> {/* Use dynamic routing */}
                            <News
                                title={newsItem.title}
                                description={newsItem.description}
                                date={newsItem.date}
                                image={newsItem.image}
                            />
                        </Link>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
