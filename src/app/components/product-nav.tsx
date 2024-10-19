"use client";
import { useState } from "react";

const ProductNav = () => {
  const [active, setActive] = useState<boolean>(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <nav>
      <ul className="flex justify-center items-center gap-10">
        <li
          onClick={handleClick}
          className={active ? "text-primary border-b border-primary" : ""}
        >
          All
        </li>
        <li
          onClick={handleClick}
          className={active ? `text-primary border-b border-primary` : ""}
        >
          Branding Goals
        </li>
        <li
          onClick={handleClick}
          className={active ? `text-primary border-b border-primary` : ""}
        >
          Photography
        </li>
        <li
          onClick={handleClick}
          className={active ? `text-primary border-b border-primary` : ""}
        >
          True Perfection
        </li>
        <li
          onClick={handleClick}
          className={active ? `text-primary border-b border-primary` : ""}
        >
          Web Design
        </li>
      </ul>
    </nav>
  );
};
export default ProductNav;
