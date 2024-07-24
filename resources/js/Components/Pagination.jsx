import { Link } from "@inertiajs/react";
import React from "react";

export default function Pagination({ links }) {
  return (
    <nav className="text-center mt-4">
      {links.map((link) => (
        <Link
          preserveScroll
          key={link.label}
          className={`inline-block py-2 px-3 rounded-lg text-gray-200 text-xs ${
            link.active ? "cursor-not-allowed bg-gray-950" : ""
          } ${link.url ? "!text-gray-500 " : "hover:bg-gray-950"}`}
          href={link.url || ""}
          dangerouslySetInnerHTML={{ __html: link.label }}
        ></Link>
      ))}
    </nav>
  );
}
