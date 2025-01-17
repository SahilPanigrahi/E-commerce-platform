import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignUpForm from "@/components/auth/SignUpForm";

export default async function SignUp() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/signin");

  return <SignUpForm />;
}

export const metadata = {
  title: 'Sign Up | Shopping Website', // The title displayed in the browser tab
  description: // Description for SEO and social sharing
    'Log in to your account on The Shopping Website and reconnect with your community. Access your profile, bids, and collaborate seamlessly. Welcome back!',
};
