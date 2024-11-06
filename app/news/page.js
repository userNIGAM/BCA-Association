'use client';
import ContactSection from '@/components/ContactSection';
import News from '@/components/News';
import SectionHeader from '@/components/SectionHeader';
import { useState } from 'react';

const NewsGrid = () => {
  // Static news data
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
    { 
        id:'7',
        title: "Future of Work", 
        description: "Exploring the future of remote work, automation, and AI in the workplace.", 
        date: "2024-10-31", 
        image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
        id:'8',
        title: "Future of Work", 
        description: "Exploring the future of remote work, automation, and AI in the workplace.", 
        date: "2024-10-31", 
        image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
        id:'9',
        title: "Future of Work", 
        description: "Exploring the future of remote work, automation, and AI in the workplace.", 
        date: "2024-10-31", 
        image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
        id:'10',
        title: "Future of Work", 
        description: "Exploring the future of remote work, automation, and AI in the workplace.", 
        date: "2024-10-31", 
        image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
    { 
        id:'11',
        title: "Future of Work", 
        description: "Exploring the future of remote work, automation, and AI in the workplace.", 
        date: "2024-10-31", 
        image: "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/465672387_574015495174413_12854603700089630_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AF-_7SHZavcQ7kNvgGqkuJP&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AyXDll8DY6-EW7TGGtfa4lG&oh=00_AYCEeITo6MaF8bFyp9IjPCkQjb_6legrF4O3yAuw8vv08w&oe=67302425" 
    },
];
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 6;

  // Calculate total pages
  const totalPages = Math.ceil(newsData.length / newsPerPage);

  // Get current news for the page
  const currentNews = newsData.slice(
    (currentPage - 1) * newsPerPage,
    currentPage * newsPerPage
  );

  // Function to handle pagination
  const handlePageChange = (page) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <>
    <div className="max-w-6xl mx-auto ">
<SectionHeader title="News & Notices"/>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentNews.map((news) => (
          <News
            key={news.id}
            title={news.title}
            description={news.description}
            date={news.date}
            image={news.image}
          />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === 1 ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-900 text-white hover:bg-blue-700'
            }`}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 mx-1 rounded ${
                currentPage === index + 1 ? 'bg-blue-700 text-white' : 'bg-blue-900 text-white hover:bg-blue-700'
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className={`px-4 py-2 mx-1 rounded ${
              currentPage === totalPages ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-900 text-white hover:bg-blue-700'
            }`}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      )}
    </div>
    <ContactSection/>
    </>
  );
};

export default NewsGrid;
