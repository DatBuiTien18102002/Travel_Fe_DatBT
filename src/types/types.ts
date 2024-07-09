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
  avatar: string;
  name: string;
  email: string;
  phone: string;
  address: string;
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

//Redux
interface userType {
  name: string;
  email: string;
  phone: string;
  address: string;
  avatar: string;
  access_token: string;
  refresh_token: string;
  ggId: string;
  fbId: string;
  provider: string;
  isAdmin: boolean;
  _id: string;
}

//API Response
interface refreshTokenApi {
  err?: string;
  newAccess_Token?: string;
}

interface responseType<dataType> {
  status: number;
  message?: string;
  data?: dataType;
}

interface signUpResData {
  createdAt: string;
  email: string;
  isAdmin: boolean;
  name: string;
  password: string;
  updatedAt: string;
  _v: number;
  _id: string;
}

interface signInResData {
  access_token: string;
  refresh_token: string;
}

interface decodedType {
  exp?: number;
  iat?: string;
  payload?: {
    id: string;
    isAdmin: boolean;
  };
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
  userType,
  responseType,
  signUpResData,
  signInResData,
  decodedType,
};
