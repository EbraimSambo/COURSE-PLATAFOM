"use client"

import MyCourse from "@/features/home/components/my-course";
import SuggestCourse from "@/features/home/components/suggest-course";

export default function Home() {
  return (
    <div className="space-y-">
      <MyCourse />
      <SuggestCourse  />
    </div>
  );
}
