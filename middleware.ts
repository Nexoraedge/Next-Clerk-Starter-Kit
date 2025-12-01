import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// 🟢 CUSTOMIZE: Add any other public routes here (e.g., /api/webhooks, /pricing)
// If you don't add a route here, it will require login!
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/protected(.*)', 
]);
    
export default clerkMiddleware(async (auth, req) => {
  // 📝 If the user tries to access a protected route, protect it
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};