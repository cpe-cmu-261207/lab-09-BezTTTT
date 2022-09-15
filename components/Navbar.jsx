import Link from "next/link";
import React from "react";
import experience from "../pages/experience";
import contact from "../pages/contact";

export default function Navbar() {
  return (
    <div>
      <div className="mx-auto">
        <div className="d-flex justify-content-center gap-5">
          <Link href="/home">
            <a>Home</a>
          </Link>
          <Link href="/experience">
            <a>Experience</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/lab-07">
            <a>Lab-07</a>
          </Link>
        </div>
      </div>
    </div>
  );
}
