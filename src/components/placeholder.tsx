/* eslint-disable @typescript-eslint/no-explicit-any */
import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<any>;
  button: React.ReactElement<any>;
};

const Placeholder = ({
  label,
  icon = <LucideMessageSquareWarning />,
  button = <div />,
}: PlaceholderProps) => {
  return (
    <div className="flex-1 self-center flex flex-col justify-center items-center gap-y-2">
      {cloneElement(icon, {
        className: "h-16 w-16",
      })}
      <h2 className="text-lg text-center">{label}</h2>
      {cloneElement(button, {
        className: "h-10",
      })}
    </div>
  );
};

export { Placeholder };

// - cloneElement is a React API that allows you to clone a React element and pass it new props.
// - It is used to clone and return a new React element using the original element as the starting point.
// - It is used to pass new props and children to the cloned element.
