

"use client";
import React, { useEffect } from 'react';
import SectionHeader from './SectionHeader';
import News from './News';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';

const EventSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const eventData = [
    { 
      id: '1',
      title: "BCA RoadMap 2080", 
      description: "Join us for the largest tech conference of the year, showcasing the latest advancements in technology and innovation.", 
      date: "2024-11-05", 
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
      id: '2',
      title: "Football- BCA vs CSIT", 
      description: "Researchers have made a groundbreaking discovery in artificial intelligence, pushing the boundaries of what's possible.", 
      date: "2024-11-04", 
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
      id: '3',
      title: "Football- BCA vs BBA", 
      description: "Several tech startups received significant funding to continue developing revolutionary products and services.", 
      date: "2024-11-03", 
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
      id: '4',
      title: "Workshop On React", 
      description: "How blockchain technology is transforming the financial industry and what it means for the future of money.", 
      date: "2024-11-02", 
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
      id: '5',
      title: "Workshop on Next", 
      description: "A look at the latest innovations in climate technology aimed at tackling global environmental challenges.", 
      date: "2024-11-01", 
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
      id: '6',
      title: "Hackathon", 
      description: "Exploring the future of remote work, automation, and AI in the workplace.", 
      date: "2024-10-31", 
      image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Events" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {eventData.map((newsItem, index) => (
          <div key={index} className="px-2 m-5" data-aos="fade-up"> {/* AOS animation applied here */}
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
      </div>
    </div>
  );
}

export default EventSection;

