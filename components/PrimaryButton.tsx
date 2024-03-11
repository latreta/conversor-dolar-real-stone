import { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function PrimaryButton({ children, ...rest }: PrimaryButtonProps) {
  return (
    <button
      {...rest}
      className="flex gap-x-4 border-brand-2 border-[1px] bg-brand-1 disabled:bg-gray-light text-white p-4 rounded-md text-lg font-semibold"
    >
      {children}
    </button>
  );
}
