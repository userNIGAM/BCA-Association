"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import SectionHeader from '@/components/SectionHeader';
import ContactSection from "@/components/ContactSection";

const teamData = [
  {
    position: 'President',
    members: [
      {
        name: 'Prashant Kafle',
        image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487',
        designation: 'President'
      }
    ]
  },
  {
    position: 'Vice Presidents & Secretaries',
    members: [
      { name: 'Hero', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Vice President' },
      { name: 'Khai', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Vice President' },
      { name: 'Kaka', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Secretary' },
      { name: 'Sanket Shiwakoti', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Vice Secretary' },
      { name: 'No Idea', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Treasurer' },
      { name: 'Utsav Dahal', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Vice Secretary' }
    ]
  },
  {
    position: 'Executive Members',
    members: [
      { name: 'Kiran Khatiwada', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' },
      { name: 'Bibika Shrestha', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' },
      { name: 'Aakriti Bhandari', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' },
      { name: 'Koshish Neupane', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' },
      { name: 'Anup Upreti', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' },
      { name: 'Nimisha Neupane', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' },
      { name: 'Neetu Magar', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' },
      { name: 'Namrata Nepal', image: 'https://scontent.fbdp2-1.fna.fbcdn.net/v/t39.30808-6/409778113_1555884088511592_5998785517839366263_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=P4J4gljcCXMQ7kNvgE_fyOj&_nc_zt=23&_nc_ht=scontent.fbdp2-1.fna&_nc_gid=AdlH4S7YDJAaoeNSUXcZhMD&oh=00_AYB4wLfIBLOo90ZP0I3xZkuqMhIBa8LHcHyYQtzNND2lDQ&oe=67310487', designation: 'Member' }
    ]
  }
];

const TeamsPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <>
    <div className="max-w-6xl relative mx-auto text-center bg-white pt-20">
      {/* Header Section */}
      <SectionHeader title="Meet Our Team" subtitle="The leadership behind BCA Association MMC" />

      {/* President Section */}
      <div className="mb-12" data-aos="fade-up">
        {teamData.slice(0, 1).map((team, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-3xl font-bold text-blue-900">{team.position}</h2>
            <div className="flex justify-center gap-6 mt-6">
              {team.members.map((member, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-40 h-40 mx-auto"
                    data-aos="zoom-in"
                  />
                  <p className="mt-2 text-lg font-medium text-blue-900">{member.name}</p>
                  <p className="text-md text-gray-600">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Vice Presidents & Secretaries Section */}
      <div className="mb-12" data-aos="fade-up">
        {teamData.slice(1, 2).map((team, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-2xl font-semibold text-blue-900">{team.position}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {team.members.map((member, idx) => (
                <div key={idx} className="text-center" data-aos="flip-right">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 mx-auto"
                  />
                  <p className="mt-2 text-lg font-medium text-blue-900">{member.name}</p>
                  <p className="text-md text-gray-600">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Executive Members Section */}
      <div data-aos="fade-up">
        {teamData.slice(2).map((team, index) => (
          <div key={index}>
            <h2 className="text-2xl font-semibold text-blue-900">{team.position}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-6">
              {team.members.map((member, idx) => (
                <div key={idx} className="text-center" data-aos="flip-left">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 mx-auto"
                  />
                  <p className="mt-2 text-lg font-medium text-blue-900">{member.name}</p>
                  <p className="text-md text-gray-600">{member.designation}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
    <ContactSection/>
    </>
  );
};

export default TeamsPage;
