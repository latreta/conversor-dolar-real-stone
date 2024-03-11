import { ButtonHTMLAttributes, ReactNode } from "react";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function SecondaryButton({ children, ...rest }: SecondaryButtonProps) {
  return (
    <button
      {...rest}
      className="flex items-center gap-x-4 border-[##D7E0EB] border-[1px] bg-[##FFFFFF] text-[##2E3742] p-4 rounded-md text-lg font-semibold"
    >
      {children}
    </button>
  );
}
