import { cn } from "@/lib/utils";
import { InputHTMLAttributes } from "react";

export default function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className={cn(
        "bg-white border border-slate-300 px-6 py-3 rounded-lg flex items-center text-slate-500",
        props.className
      )}
    />
  );
}
