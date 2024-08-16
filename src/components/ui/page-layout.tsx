"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type pageLayoutProps = {
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<"div">;

const PageLayout = ({ children, className, ...rest }: pageLayoutProps) => {
  return (
    <div
      className={cn(
        `grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]`,
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PageLayout;
