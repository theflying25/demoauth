import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

export default function LoginPage() {
  return (
    
      <Card className="w-[380px] shadow-md">
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Welcome back</CardTitle>
          <CardDescription>Sign Up with your Social Account</CardDescription>
        </CardHeader>
        <CardContent className="flex-col sm:flex-row
         items-center justify-center gap-3 space-y-3">
          <Button  className="w-full">
            <FaGithub className="size-4" />
            Sign Up with Github
          </Button>
          
           <Button className="w-full">
            <FaGoogle  className="size-4" />
            Sign Up with Google
          </Button>
          <div className="relative text-center text-sm after:absolute after:inset-0
          after:top-1/2 after:z-0 after:flex after:items-center after:border-t
          after:border-border">
            <span className="relative z-10 bg-card px-2 text-muted-foreground">
              or Continue with 
            </span>
          </div>
          
          <div className="grid gap-3 items-center">
            <div className="grid gap-2">
              <label htmlFor="email">
                Email
              </label>
              <Input type="email" placeholder="Enter email" />
            </div>

            <div className="grid gap-2">
              <label htmlFor="password">
                Password
              </label>
              <Input type="password" placeholder="Enter password" />
            </div>
           
          </div>
          <Button className="w-full">Sign Up</Button>

          <p>Already Have an Account? <span className="text-primary">Log In</span></p>
        </CardContent>
      </Card>
 
  );
}
