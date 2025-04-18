"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        setLoading(false);
        return;
      }

      router.replace("shop");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="grid place-items-center h-screen bg-gray-100">
      <div className="shadow-lg p-8 rounded-lg border-t-4 border-black bg-white w-96">
        <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            disabled={loading}
            className={`${
              loading ? "bg-gray-500" : "bg-black hover:bg-gray-800"
            } text-white font-bold cursor-pointer px-6 py-3 rounded-md transition-all`}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          {error && (
            <div className="bg-red-500 text-white w-fit text-sm py-2 px-4 rounded-md">
              {error}
            </div>
          )}
        </form>

        <p className="text-sm mt-4 text-center">
          Don't have an account?{" "}
          <Link href={"/signup"} className="text-blue-500 underline hover:text-blue-700">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
