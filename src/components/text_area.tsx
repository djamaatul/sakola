import { cn } from "@/lib/utils";
import { TextareaHTMLAttributes } from "react";

export default function TextArea(
  props: TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        "bg-white border border-slate-300 px-6 py-3 rounded-lg flex items-center text-slate-500",
        props.className
      )}
    ></textarea>
  );
}
