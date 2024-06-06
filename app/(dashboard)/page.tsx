import { Button } from "@/components/ui/button";
import { useGetAccounts } from "@/features/accounts/api/use-get-accounts";

// This is the root home page
// Only logged in users should be able to see this page
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      Homepage
    </div>
  )
}
