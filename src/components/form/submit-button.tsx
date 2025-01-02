"use client";
import { LucideLoaderCircle } from "lucide-react";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
type SybmitButtonProps = {
  label: string;
};
const SubmitButton = ({ label }: SybmitButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button type="submit">
      {pending && <LucideLoaderCircle className="mr-2 h-4 w-4 animate-spin" />}
      {label}
    </Button>
  );
};

export { SubmitButton };
