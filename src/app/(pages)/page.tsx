"use client"
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const { setTheme } = useTheme()
  return (
    <div className="">
      Home
    </div>
  );
}
