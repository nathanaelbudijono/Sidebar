"use client";

import * as React from "react";
import Typography from "./typography";

interface contentTitleProps {
  title: string;
}

const contentTitle = ({ title }: contentTitleProps) => {
  return (
    <div className="flex items-center">
      <Typography variant="h3">{title}</Typography>
    </div>
  );
};

export default contentTitle;
