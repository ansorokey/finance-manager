import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Turns these routes into protected (authenticated) routes
const isProtectedRoute = createRouteMatcher([
    '/',
    '/api(.*)' // Redirects away from the api routes
]);

export default clerkMiddleware((auth, request) => {
    if (isProtectedRoute(request)) {
        auth().protect();
    }

    return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
