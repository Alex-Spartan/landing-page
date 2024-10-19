"use client";
import { useState } from "react";

const ProductNav = () => {
  const [active, setActive] = useState<string>("All");
  const handleClick = (tab: string) => {
    setActive(tab);
  };
  return (
    <nav>
      <ul className="flex justify-center items-center gap-10">
        {["All", "Branding Goals", "Photography", "True Perfection", "Web Design"].map((tab) => (
          <li
            key={tab}
            onClick={() => handleClick(tab)}
            className={active === tab ? "text-primary border-b border-primary" : ""}
          >
            {tab}
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default ProductNav;
