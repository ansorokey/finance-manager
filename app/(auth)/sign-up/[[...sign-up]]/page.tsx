// This is a catch-all route to redirect to this page from
// any parameters in the URL.

import { SignUp } from "@clerk/nextjs";

export default function Page() {
    // add path="sign-up" is not working
    return <SignUp />;
}
