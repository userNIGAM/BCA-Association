// components/News.js
import { motion } from "framer-motion";

export default function News({ title, description, date, image }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:shadow-xl"
        >
            {/* News Image with Gradient Overlay */}
            <div className="relative h-48 overflow-hidden">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transform transition duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                <h3 className="absolute bottom-4 left-4 text-white font-semibold text-lg z-10">
                    {title}
                </h3>
            </div>

            {/* News Content */}
            <div className="p-4">
                <p className="text-gray-500 text-xs">{date}</p>
                <p className="mt-2 text-gray-700 text-sm line-clamp-3">{description}</p>
            </div>

            {/* Read More Button */}
            <div className="px-4 pb-4">
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full text-xs font-semibold shadow-md hover:bg-blue-600 transition duration-300">
                    Read More
                </button>
            </div>
        </motion.div>
    );
}
