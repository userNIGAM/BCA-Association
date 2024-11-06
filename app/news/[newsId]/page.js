'use client'
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

// Mock data or replace with API data fetching.
const mockNewsData = [
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

const NewsDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the news id from the URL
  const [news, setNews] = useState(null);

  useEffect(() => {
    // Ensure the router is ready before accessing the query parameters
    if (router.isReady) {
      // Simulating fetching the news item based on ID.
      const newsItem = mockNewsData.find((item) => item.id === id);
      setNews(newsItem);
    }
  }, [id, router.isReady]);

  if (!news) {
    return <div>Loading...</div>; // Show a loading state if the news is not loaded yet
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-blue-800">{news.title}</h1>
        <p className="text-gray-500 text-sm mt-2">Posted on {news.datePosted}</p>
      </div>
      <div className="relative w-full h-80 mb-8">
        <Image
          src={news.image}
          alt={news.title}
          layout="fill"
          objectFit="cover"
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="text-lg text-gray-700 leading-relaxed">
        <p>{news.description}</p>
      </div>
      <div className="mt-8">
        <Link href="/news" className="text-blue-600 hover:text-blue-800">
          ← Back to News
        </Link>
      </div>
    </div>
  );
};

export default NewsDetail;
