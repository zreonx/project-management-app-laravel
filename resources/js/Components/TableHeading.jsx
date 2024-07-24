import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import React from "react";

export default function TableHeading({
  sort_field = null,
  sort_direction = null,
  name,
  sortable = true,
  sortChanged = () => {},
  children,
}) {
  return (
    <th onClick={(e) => sortChanged(name)} className="px-3 py-3">
      <div className="flex items-center justify-between gap-1 cursor-pointer">
        {children}
        {sortable && (
          <div>
            <ChevronUpIcon
              className={`w-4 ${
                sort_field === name && sort_direction === "asc"
                  ? "text-white"
                  : ""
              }`}
            />
            <ChevronDownIcon
              className={`w-4 -mt-2 ${
                sort_field === name && sort_direction === "desc"
                  ? "text-white"
                  : ""
              }`}
            />
          </div>
        )}
      </div>
    </th>
  );
}
