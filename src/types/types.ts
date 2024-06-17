import React from "react";

interface layoutProps {
  children: React.ReactNode;
  className?: string;
}

interface routeProps {
  path: string;
  page: React.FC;
  title: string;
  layout?: React.FC | null;
}

// Header

interface headerMenuProps {
  title: string;
  onBack?: React.FC;
}

interface menuItemProps {
  data: {
    separate?: boolean;
    to?: string;
    icon?: React.ReactNode;
    title?: string;
    onClick?: () => void;
  };
}

interface userMenuProps {
  children: React.ReactElement;
  items: menuItemProps["data"][];
  hideOnClick?: boolean;
}

interface barsButtonProps {
  open: boolean;
  // setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setOpen: () => void;
  color: string;
}
// ***********************

export type {
  routeProps,
  layoutProps,
  headerMenuProps,
  menuItemProps,
  userMenuProps,
  barsButtonProps,
};
