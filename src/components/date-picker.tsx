"use client";

import { format } from "date-fns";
import { LucideCalendar } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type DatePickerProps = {
  id: string;
  name: string;
  defaultValue?: string | undefined;
};

const DatePicker = ({ id, name, defaultValue }: DatePickerProps) => {
  const [date, setDate] = useState<Date | undefined>(
    defaultValue ? new Date(defaultValue) : new Date()
  );
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    setOpen(false);
  };

  const formatedStringDate = date ? format(date, "yyyy-MM-dd") : "";

  return (
    <Popover
      open={open}
      onOpenChange={setOpen}
    >
      <PopoverTrigger
        className="w-full"
        id={id}
        asChild
      >
        <Button
          variant={"outline"}
          className="justify-start text-left font-normal"
        >
          <LucideCalendar />
          <input
            type="hidden"
            name={name}
            value={formatedStringDate}
          />
          {formatedStringDate}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleSelect}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
};

export { DatePicker };
