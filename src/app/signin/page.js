import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import LoginForm from "@/components/auth/LoginForm";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/");

  return (
    <main>
      <LoginForm />
    </main>
  );
}

export const metadata = {
  title: 'Login | Shopping Website', // The title displayed in the browser tab
  description: // Description for SEO and social sharing
    'Log in to your account on The Shopping Website and reconnect with your community. Access your profile, bids, and collaborate seamlessly. Welcome back!',
};
