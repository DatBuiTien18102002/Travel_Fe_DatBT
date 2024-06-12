import React from "react";

interface layoutProps {
  children: React.ReactNode;
}

interface routeProps {
  path: string;
  page: React.FC;
  title: string;
  layout?: React.FC | null;
}

export type { routeProps, layoutProps };
