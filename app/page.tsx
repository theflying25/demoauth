import { ThemeToggle } from "@/components/themeToggle";
import Image from "next/image";
import PricingCard from "./design/page";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center
     bg-zinc-50 font-sans dark:bg-black">
     
      <ThemeToggle />
      <PricingCard/>
    </div>
  );
}
