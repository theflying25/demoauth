import { Badge } from "@/components/ui/badge";
import { MdVerified } from "react-icons/md";

export default function PricingCard() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 ">
      <>
      <Badge variant={"outline"} className="flex  items-center justify-center  text-xl outline-amber-300 rounded-lg">
        <MdVerified  className="w-100 h-100"/>
        Are you Ready</Badge>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      End To End Freelance Service Only at $9.99/mo
    </h2>
     <p className="text-muted-foreground text-xl">
      Only Graphic Design & Full Stack Website Development & Video Editing 
    </p>

      </>
    </div>
  );
}
