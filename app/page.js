import About from "@/components/home/About";
import ContactSection from "@/components/ContactSection";
import EventSection from "@/components/home/EventSection";
import Hero from "@/components/home/Hero";
import NewsSection from "@/components/home/NewsSection";
import React from "react";
import { fetchEvents } from "./admin/[...type]/page";

const page = async () => {
  const events = await fetchEvents();

  return (
    <div>
      <Hero />
      <About />
      {events.status === "success" && <EventSection events={events.data} />}

      <ContactSection />
    </div>
  );
};

export default page;
