// This is a catch-all route to redirect to this page
// from any parameters in the URL.

import { SignIn } from "@clerk/nextjs";

export default function Page() {
    // add path="sign-in" is not working
    return (
        <div className="min-">
            <SignIn />
        </div>
    );
}
