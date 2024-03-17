"use client";

import { useEffect, useState } from "react";

// import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  const [text, setText] = useState("Loading");
  useEffect(() => {
    setInterval(() => {
      setText((prev) => prev + ".");
    }, 2000);
  }, [text]);

  return (
    // <div className=" space-y-2">
    //   <Skeleton className="h-4 w-[300px]" />
    //   <Skeleton className="h-4 w-[260px]" />
    //   <Skeleton className="h-4 w-[300px]" />
    //   <Skeleton className="h-4 w-[260px]" />
    // </div>
    <h6>{text}</h6>
  );
}
