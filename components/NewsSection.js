'use client'
import Slider from "react-slick";
import News from "./News";
import SectionHeader from "./SectionHeader";

export default function NewsSection() {
    const newsData = [
        { 
            title: "Tech Conference 2024", 
            description: "Join us for the largest tech conference of the year, showcasing the latest advancements in technology and innovation.", 
            date: "2024-11-05", 
            image: "/images/news1.jpg" 
        },
        { 
            title: "New AI Breakthrough", 
            description: "Researchers have made a groundbreaking discovery in artificial intelligence, pushing the boundaries of what's possible.", 
            date: "2024-11-04", 
            image: "/images/news2.jpg" 
        },
        { 
            title: "Startup Funding Alert", 
            description: "Several tech startups received significant funding to continue developing revolutionary products and services.", 
            date: "2024-11-03", 
            image: "/images/news3.jpg" 
        },
        { 
            title: "Blockchain in Finance", 
            description: "How blockchain technology is transforming the financial industry and what it means for the future of money.", 
            date: "2024-11-02", 
            image: "/images/news4.jpg" 
        },
        { 
            title: "Climate Tech Innovations", 
            description: "A look at the latest innovations in climate technology aimed at tackling global environmental challenges.", 
            date: "2024-11-01", 
            image: "/images/news5.jpg" 
        },
        { 
            title: "Future of Work", 
            description: "Exploring the future of remote work, automation, and AI in the workplace.", 
            date: "2024-10-31", 
            image: "/images/news6.jpg" 
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

    return (
        <div className="py-8 px-4 rounded-lg max-w-6xl mx-auto text-center">
            <SectionHeader title="News & Notices" />
            <Slider {...settings} >
                {newsData.map((newsItem, index) => (
                    <div key={index} className="px-2 m-5">
                        <News
                            title={newsItem.title}
                            description={newsItem.description}
                            date={newsItem.date}
                            image={newsItem.image}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
}
