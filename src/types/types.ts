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

// form
interface contactValueForm {
  name: string;
  email: string;
  message: string;
}

interface signInValueForm {
  email: string;
  password: string;
}

interface signUpValueForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface userAdminForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
}

// ***********************

//Admin
interface sideBarAdminProps {
  activeBtn: string;
  handleActiveBtnSidebar: (element: EventTarget) => void;
}

interface userAdminColumn extends Record<string, unknown> {
  key: string;
  id: string;
  email: string;
  tour: string;
  totalPrice: number;
  status: string;
}

export type {
  routeProps,
  layoutProps,
  headerMenuProps,
  menuItemProps,
  userMenuProps,
  barsButtonProps,
  contactValueForm,
  signInValueForm,
  signUpValueForm,
  sideBarAdminProps,
  userAdminColumn,
  userAdminForm,
};
