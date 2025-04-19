"use client";

import { LucideKanban, LucideLogOut } from "lucide-react";
import Link from "next/link";

import { SubmitButton } from "@/components/form/submit-button";
import { ThemeSwitcher } from "@/components/theme/theme-switcher";
import { signOut } from "@/features/auth/actions/sign-out";
import { useAuth } from "@/features/auth/hooks/use-auth";
import { homePath, signInPath, signUpPath, ticketsPath } from "@/paths";

import { buttonVariants } from "./ui/button";

const Header = () => {
  const { user, isFetched } = useAuth();

  if (!isFetched) {
    return null; // or a loading spinner
  }

  const navItems = user ? (
    <>
      <Link
        className={buttonVariants({ variant: "default" })}
        href={ticketsPath()}
      >
        Tickets
      </Link>
      <form action={signOut}>
        <SubmitButton
          label="Sign Out"
          icon={<LucideLogOut />}
        />
      </form>
    </>
  ) : (
    <>
      <Link
        className={buttonVariants({ variant: "outline" })}
        href={signUpPath()}
      >
        Sign Up
      </Link>
      <Link
        className={buttonVariants({ variant: "default" })}
        href={signInPath()}
      >
        Sign In
      </Link>
    </>
  );

  return (
    <nav
      className="
            animate-header-from-top
            supports-backdrop-blur:bg-background/60
            fixed left-0 right-0 top-0 z-20
            border-b bg-background/95 backdrop-blur
            w-full flex py-2.5 px-5 justify-between
            "
    >
      <div className="flex items-center gap-x-2">
        <Link
          className={buttonVariants({ variant: "ghost" })}
          href={homePath()}
        >
          <LucideKanban />
          <h1 className="ml-2 text-lg font-semibold">TicketBounty</h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-2">
        <ThemeSwitcher />
        {navItems}
      </div>
    </nav>
  );
};

export { Header };
