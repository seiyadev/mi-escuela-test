import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

export default function AttendanceCheckboxGroup({
  selected,
  handleSelect,
}: {
  selected: string;
  handleSelect: (option: string) => void;
}) {
  return (
    <div className="space-x-3 flex items-center">
      <div
        className={`items-top flex space-x-2 p-3 rounded-lg border-[1px] w-full ${
          selected === "present"
            ? "bg-blue-100 border-blue-200"
            : "bg-gray-100 border-gray-200"
        }`}
        onClick={() => handleSelect("present")}
      >
        <Checkbox
          checked={selected === "present"}
          onCheckedChange={() => handleSelect("present")}
        />
        <small className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Presente
        </small>
      </div>
      <div
        className={`items-top flex space-x-2 p-3 rounded-lg border-[1px] w-full ${
          selected === "absent"
            ? "bg-red-100 border-red-200"
            : "bg-gray-100 border-gray-200"
        }`}
        onClick={() => handleSelect("absent")}
      >
        <Checkbox
          checked={selected === "absent"}
          onCheckedChange={() => handleSelect("absent")}
        />
        <small className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Ausente
        </small>
      </div>
    </div>
  );
}
