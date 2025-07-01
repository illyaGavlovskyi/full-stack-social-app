import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import ModeToggle from "@/components/ui/ModeTogle";

export default function Home() {
  return (
    <div>
      <SignedOut>
        <SignInButton mode="modal">
         <Button>sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <ModeToggle />
    </div>
  );
}