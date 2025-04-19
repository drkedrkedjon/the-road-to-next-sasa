"use client";
import { LucideLoaderCircle } from "lucide-react";
import { cloneElement } from "react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
type SybmitButtonProps = {
  label: string;
  icon?: React.ReactElement<{ className?: string }>;
};
const SubmitButton = ({ label, icon }: SybmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending && <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      {label}
      {icon ? (
        <span className="ml-2">
          {cloneElement(icon, {
            className: "h-4 w-4",
          })}
        </span>
      ) : null}
    </Button>
  );
};

export { SubmitButton };
