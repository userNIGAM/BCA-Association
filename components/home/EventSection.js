"use client";
import React, { useEffect } from "react";
import SectionHeader from "../SectionHeader";
import News from "../News";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

const EventSection = () => {
  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  const eventData = [
    {
      id: "1",
      title: "BCA RoadMap 2080",
      description:
        "Join us for the largest tech conference of the year, showcasing the latest advancements in technology and innovation.",
      date: "2024-11-05",
      image:
        "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/412980447_374795915096373_7762907625877291957_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=li9FxM_H5d8Q7kNvgEtAXhv&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AxqeoD8Rbs28JSpF6wMb7d7&oh=00_AYCgXIkfeVMwHf5RUELmJhozeeELqnmK-R4NlRjL7qKuCA&oe=6731258B",
    },
    {
      id: "2",
      title: "Football- BCA vs CSIT",
      description:
        "Researchers have made a groundbreaking discovery in artificial intelligence, pushing the boundaries of what's possible.",
      date: "2024-11-04",
      image:
        "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/428610122_411284284780869_3931799650956470497_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=-XQ0hkWTKdIQ7kNvgHzIvzi&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AIj9xoZaPlN6WGgdEQ-UTt2&oh=00_AYAnwC19-j_Al8sjSm658fGXevqv80rGjTUJTqId7VVDjw&oe=67311F00",
    },
    {
      id: "3",
      title: "Football- BCA vs BBA",
      description:
        "Several tech startups received significant funding to continue developing revolutionary products and services.",
      date: "2024-11-03",
      image:
        "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/428620888_411910964718201_4938317840983910265_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=AJyu18CmvG4Q7kNvgHQrObI&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AXElPjQgQf61AibM-1-Ouef&oh=00_AYAelyicQsW0I7tcH6UOmOn1v1vZrquNtyjvvdD1HOWZww&oe=6731017D",
    },
    {
      id: "4",
      title: "Workshop On IOT",
      description:
        "How blockchain technology is transforming the financial industry and what it means for the future of money.",
      date: "2024-11-02",
      image:
        "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/454792557_513398211236142_9213939088180499612_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=wWpDLhHq4Y4Q7kNvgHnh7k8&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=A6VcEGa7QiQwPhHsMyl3e6X&oh=00_AYBMC9jN4NlI5F970BZ2XaPm23_l6z3cAEGUcA3fxzdq_A&oe=6731170C",
    },
    {
      id: "5",
      title: "Entrance Mock Test",
      description:
        "A look at the latest innovations in climate technology aimed at tackling global environmental challenges.",
      date: "2024-11-01",
      image:
        "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/457403746_527609173148379_1226154927446818308_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=aszfhN9aNAcQ7kNvgGTE2Se&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AzmmcV3rkEy2F_eTKn7kqBt&oh=00_AYCYrit2h2lcVWSIeZvMD-RLW86w4PW0UZf8vMX-Nnqvwg&oe=673135A6",
    },
    {
      id: "6",
      title: "Hackathon Participation",
      description:
        "Exploring the future of remote work, automation, and AI in the workplace.",
      date: "2024-10-31",
      image:
        "https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/460736410_541702915072338_8943805017178565975_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=HIqtnRvKQ9kQ7kNvgERYY8b&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=Ahr8b25s-ISmQ2QFgP3DSXt&oh=00_AYBiKlycRA338dEzO5fyzjAQj5IJ3rOsW06AR7oNkuav_Q&oe=67310528",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <SectionHeader title="Events" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Use slice to only show the first 6 events */}
        {eventData.slice(0, 6).map((newsItem, index) => (
          <div key={index} className="px-2 m-5" data-aos="fade-up">
            {" "}
            {/* AOS animation applied here */}
            <News
              id={newsItem.id}
              title={newsItem.title}
              description={newsItem.description}
              date={newsItem.date}
              image={newsItem.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventSection;
