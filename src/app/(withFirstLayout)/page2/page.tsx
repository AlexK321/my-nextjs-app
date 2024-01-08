import { Counter } from "@/components/Counter/intex";
import { usePathname } from "next/navigation";

export default function Page() {
  return (
    <div>
      <h1>Page 2</h1>
      <Counter />
    </div>
  );
}
