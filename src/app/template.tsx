import { RedirectToast } from "@/components/redirect-toast";

type RootTemplatePrope = {
  children: React.ReactNode;
};

export default function RootTemplate({ children }: RootTemplatePrope) {
  return (
    <>
      <>{children}</>
      <RedirectToast />
    </>
  );
}
