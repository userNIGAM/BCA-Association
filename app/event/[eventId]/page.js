import NewsMain from "@/components/News/NewsMain";
import React from "react";

async function page({ params }) {
  const { eventId } = await params;
  return (
    <div className="pt-18">
      <NewsMain id={eventId} />
    </div>
  );
}

export default page;
