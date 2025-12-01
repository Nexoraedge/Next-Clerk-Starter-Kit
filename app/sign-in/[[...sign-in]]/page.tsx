import { SignIn } from "@clerk/nextjs";

// 📝 This component renders the Clerk Sign-In form
// It centers the box nicely on the screen
export default function Page() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-950">
      <SignIn path="/sign-in" />
    </div>
  );
}