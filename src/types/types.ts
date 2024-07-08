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

interface userAdminForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
}

interface profileForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}
interface updatePasswordForm {
  oldPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

interface booleanSetStateProps {
  setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
}

//Profile
interface bookingForm {
  name: string;
  email: string;
  phone: string;
  address: string;
}

//History Tour

interface bookingHistoryColumn extends Record<string, unknown> {
  key: string;
  id: string;
  nameTour: string;
  status: string;
  totalPrice: number;
  createAt: string;
}

//

//API Response
interface refreshTokenApi {
  err?: string;
  newAccess_Token?: string;
  [key: string]: unknown; // Các thuộc tính khác của phản hồi, nếu có
}

interface jwtDecodeType {
  exp?: number;
  iat?: number;
  sub?: string;
  [key: string]: unknown; // Cho phép thêm các thuộc tính khác nếu có
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
  profileForm,
  updatePasswordForm,
  booleanSetStateProps,
  bookingForm,
  bookingHistoryColumn,
  refreshTokenApi,
  jwtDecodeType,
};
