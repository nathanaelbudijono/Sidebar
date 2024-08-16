"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type contentProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

const Content = ({ children, className, ...rest }: contentProps) => {
  return (
    <div
      className={cn(
        `flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sms`,
        className
      )}
      {...rest}
    >
      <div className="flex flex-col items-center gap-1 text-center">
        {children}
      </div>
    </div>
  );
};

export default Content;
