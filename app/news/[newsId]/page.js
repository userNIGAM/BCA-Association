import NewsMain from "@/components/News/NewsMain";
import React from "react";

async function page({ params }) {
  const { newsId } = await params;
  return (
    <div>
      <NewsMain id={newsId} />
    </div>
  );
}

export default page;
