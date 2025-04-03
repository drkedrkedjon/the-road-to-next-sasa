import Link from "next/link";

import { CardCompact } from "@/components/card-compact";
import SignInForm from "@/features/auth/components/sign-in-form";
import { passwordForgotPath, signUpPath } from "@/paths";

const SignInPage = () => {
  return (
    <div className="flex-1 flex flex-col justify-center items-center">
      <CardCompact
        title="Sign In"
        description="Sign in to your account"
        className="w-full max-w-[420px] animate-fade-in-from-top"
        content={<SignInForm />}
        footer={
          <div className="flex flex-1 justify-between gap-2">
            <Link
              className="text-sm text-muted-foreground"
              href={signUpPath()}
            >
              No account yet?
            </Link>
            <Link
              className="text-sm text-muted-foreground"
              href={passwordForgotPath()}
            >
              Forgot password?
            </Link>
          </div>
        }
      />
    </div>
  );
};

export default SignInPage;
