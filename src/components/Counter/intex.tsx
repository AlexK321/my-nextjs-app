"use client";
import { usePathname } from "next/navigation";
import { useState } from "react";

export const Counter = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [count, setCount] = useState(0);
  return (
    <div>
      ----------------------------
      <p>pathname: {pathname}</p>
      ----------------------------
      <h1>{count}</h1>
      <br />
      <button onClick={() => setCount(count + 1)}>Button Add</button>
      <br />
      <button onClick={() => setCount(count - 1)}>Button Subtract</button>
      <br />
      ----------------------------
    </div>
  );
};
