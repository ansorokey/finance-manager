import { Button } from "@/components/ui/button";

// This is the root home page
// Only logged in users should be able to see this page
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton />
      <p>This is an authenticated route</p>
    </div>
  );
}
