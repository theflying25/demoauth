
import { buttonVariants } from "@/components/ui/button";
import { Arrow } from "@radix-ui/react-dropdown-menu";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Children } from "react";
import Image from "next/image";
import Logo from "@/public/logo.png"; // or wherever your image lives


export default function AuthLayout({children}: {children: React.ReactNode}) {
    return(
        <div className="relative flex min-h-svh flex-col 
        items-center justify-center">

        <Link href="/" className={buttonVariants({variant:"outline",
            className:"absolute top-4 left-4 md:top-8 md:left-8 "
        })}>
        <ArrowLeft className="size-4" />Back</Link>
        <div className="flex w-full max-w-sm flex-col gap-6">
            <Link className="flex items-center gap-2 
            self-center font-medium text-lg" href="/">
                <Image src={Logo} alt="logo" className=" width={22}
        height={22}" />
                </Link>
            {children}
            <div>By Clicking Continue, You Agree to our {" "}
                <span className="hover:underline hover:text-primary hover:cursor-pointer gap-2">Terms of Service</span> {" "}
                  and {" "} <span className="hover:underline hover:text-primary hover:cursor-pointer">Privacy Policy</span>.</div>
        </div>
        </div>
    )
}