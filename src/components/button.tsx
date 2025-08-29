import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

function Button(
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) {
  return (
    <button
      {...props}
      className={cn(
        "bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg transition-colors font-medium flex items-center justify-center hover:cursor-pointer gap-2",
        props.className
      )}
    >
      {props.children}
    </button>
  );
}

Button.link = (
  props: PropsWithChildren<{ href: string; className?: string }>
) => {
  return (
    <Link href={props.href}>
      <Button
        {...props}
        className={cn(
          "text-inherit bg-inherit hover:bg-inherit hover:text-primary-500",
          props.className
        )}
      >
        {props.children}
      </Button>
    </Link>
  );
};

Button.outline = (
  props: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
) => {
  return (
    <Button
      {...props}
      className="border border-gray-300 hover:border-primary-600 bg-white text-gray-700 hover:text-white"
    >
      {props.children}
    </Button>
  );
};

export default Button;
