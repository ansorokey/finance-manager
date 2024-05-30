// This is a catch-all route to redirect to this page
// from any parameters in the URL.

import Image from "next/image";
import { Loader2 } from "lucide-react";
import { SignIn, ClerkLoaded, ClerkLoading } from "@clerk/nextjs";

export default function Page() {
    // add path="sign-in" is not working
    return (
        <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">

            {/* Greeting and sign-in modal */}
            <div className="h-full lg:flex flex-col items-center justify-center px-4">
                <div className="text-center space-y-4 pt-16">
                    <h1 className="font-bold text-3xl text-[#2e2a47]">
                        Welcome Back!
                    </h1>
                    <p className="text-base text-[#7e87a0]">
                        Log in or Create account to get back to your dashboard
                    </p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <ClerkLoaded>
                        <SignIn />
                    </ClerkLoaded>
                    <ClerkLoading>
                        <Loader2 className="animate-spin text-muted-foreground" />
                    </ClerkLoading>
                </div>
            </div>

            {/* Logo */}
            <div className="h-full bg-blue-600 hidden lg:flex items-center justify-center">
                <Image src="/logo.svg" height={100} width={100} alt="Logo"/>
            </div>
        </div>
    );
}
