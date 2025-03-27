import About from "@/components/home/About";
import EventSection from "@/components/home/EventSection";
import Hero from "@/components/home/Hero";
import React from "react";
import TicketForm from "@/components/tickets/TicketMain";

const page = async () => {
  // const events = {
  //   status: "success",
  //   data: [
  //     {
  //       id: 1,
  //       title: "Event 1",
  //       description: "Event 1 Description",
  //       date: "2022-09-01",
  //       time: "10:00",
  //       venue: "Venue 1",
  //       image: "https://source.unsplash.com/random/800x600",
  //     },
  //     {
  //       id: 2,
  //       title: "Event 2",
  //       description: "Event 2 Description",
  //       date: "2022-09-02",
  //       time: "10:00",
  //       venue: "Venue 2",
  //       image: "https://source.unsplash.com/random/800x600",
  //     },
  //     {
  //       id: 3,
  //       title: "Event 3",
  //       description: "Event 3 Description",
  //       date: "2022-09-03",
  //       time: "10:00",
  //       venue: "Venue 3",
  //       image: "https://source.unsplash.com/random/800x600",
  //     },
  //   ],
  // };

  return (
    <div>
      <Hero />
      <About />
      <EventSection />
      <div className="flex h-[80vh] gap-3 items-center justify-between w-full p-8">
        <div className="lg:flex hidden w-full flex-col items-center gap-3">
          <h1 className="text-4xl font-bold">Any Problem? Contact Us Now</h1>
          <img
            src="https://static.vecteezy.com/system/resources/previews/006/584/592/original/illustration-graphic-cartoon-character-of-contact-us-vector.jpg"
            alt="contact"
            className="w-1/3"
          />
        </div>
        <div className="flex lg:w-1/2 w-full flex-col gap-3">
          <TicketForm />
        </div>
      </div>

      {/* <ContactSection /> */}
    </div>
  );
};

export default page;
