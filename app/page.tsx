import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/auth/LoginButton";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-full bg-blue-500">
      <div className="text-center space-y-6">
        <h1
          className={cn(
            "text-4xl font-semibold sm:text-6xl drop-shadow-md text-white",
            font.className
          )}
        >
          🔐Auth
        </h1>
        <p className="text-lg sm:text-xl text-white">
          A simple authentication service
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">Sign in</Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
