"use client";

import { Button } from "@/components/ui/button";
import { useAlert } from "@/context/AlertProvider";
import { supabase } from "@/lib/supabaseClient";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

import type React from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { showAlert } = useAlert();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }

    setIsLoading(true);

    try {
      const { error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        setError("Invalid email or password. Please try again.");
      } else {
        showAlert("You are logged in.", "success");
        setTimeout(() => router.push("/admin/tours"), 1000);
      }
    } catch (err) {
      showAlert("Email or password is incorrect", "error");
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex flex-grow justify-center items-center bg-gray-50 px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8 w-full max-w-md">
          <div className="text-center">
            <h2 className="font-bold text-gray-900 text-3xl">
              Sign in to your account
            </h2>
          </div>

          {error && (
            <div className="bg-red-50 px-4 py-3 border border-red-200 rounded-md text-red-700 text-sm">
              {error}
            </div>
          )}

          <form className="space-y-6 mt-8" onSubmit={handleSubmit}>
            <div className="space-y-4 shadow-sm rounded-md">
              <div>
                <label
                  htmlFor="email-address"
                  className="block mb-1 font-medium text-gray-700 text-sm"
                >
                  Email address
                </label>
                <div className="relative">
                  <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block bg-white py-2 pr-3 pl-10 border border-gray-300 focus:border-red-500 rounded-md focus:outline-none focus:ring-red-500 w-full sm:text-sm leading-5 placeholder-gray-500"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block mb-1 font-medium text-gray-700 text-sm"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="left-0 absolute inset-y-0 flex items-center pl-3 pointer-events-none">
                    <Lock className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block bg-white py-2 pr-10 pl-10 border border-gray-300 focus:border-red-500 rounded-md focus:outline-none focus:ring-red-500 w-full sm:text-sm leading-5 placeholder-gray-500"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="right-0 absolute inset-y-0 flex items-center pr-3"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-gray-400" />
                    ) : (
                      <Eye className="w-5 h-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <Button
                type="submit"
                className="bg-red-600 hover:bg-red-700 focus:ring-red-500 w-full"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
