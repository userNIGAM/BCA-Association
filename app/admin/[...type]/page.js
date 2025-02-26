import MainEvents from "@/components/admin/events/MainEvents";
import React from "react";

export const fetchEvents = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_URL + "/api/events");
  return res.json();
};

async function page({ params }) {
  const { type } = await params;
  const events = await fetchEvents();

  if (events.status !== "success") {
    return <div>Failed to fetch data</div>;
  }

  return (
    <div className="min-h-screen flex  p-5 pt-24 w-full">
      {type == "events" && <MainEvents events={events.data} />}
    </div>
  );
}

export default page;
