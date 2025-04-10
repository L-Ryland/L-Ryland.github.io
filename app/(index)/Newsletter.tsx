"use client";

import { Button } from "@/components/ui";
import { Mail } from "lucide-react";

const FORM_ACTION = "/thank-you";

const Newsletter = () => {
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form
      action={FORM_ACTION}
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
      onSubmit={(e) => {
        const emailInput = e.currentTarget.querySelector(
          'input[type="email"]',
        ) as HTMLInputElement;
        if (!validateEmail(emailInput.value)) {
          e.preventDefault();
          alert("Please enter a valid email address.");
        }
      }}
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <Mail
          un-size="6"
          un-flex="none"
          un-stroke="zinc-400 dark:zinc-500"
          un-fill="zinc-100 dark:zinc-100/10"
        />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  );
};

export default Newsletter;
