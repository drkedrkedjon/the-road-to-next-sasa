import Link from "next/link";

import { Heading } from "@/components/heading";
import { ticketsPath } from "@/paths";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <Heading
        title="Home"
        description="Your home place to start"
      />

      <div className="flex flex-col flex-1 items-center ">
        <Link
          href={ticketsPath()}
          className="underline"
        >
          Go to tickets page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
