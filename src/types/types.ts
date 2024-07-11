import React from "react";
import { Value } from "react-multi-date-picker";

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
  phone?: string;
  address?: string;
  avatar?: string;
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

interface userCreateAdminForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  address: string;
}

interface userUpdateAdminForm {
  name: string;
  email: string;
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

interface userAdminFormProps {
  setIsOpenForm: React.Dispatch<React.SetStateAction<boolean>>;
  type: string;
  defaultValue: userResData;
  setIsActionAllowed: React.Dispatch<React.SetStateAction<boolean>>;
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
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  avatar?: string;
  access_token?: string;
  refresh_token?: string;
  ggId?: string;
  fbId?: string;
  provider?: string;
  isAdmin?: boolean;
  _id?: string;
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

interface userResData {
  avatar?: string;
  address?: string;
  createdAt?: string;
  email?: string;
  isAdmin?: boolean;
  name?: string;
  password?: string;
  phone?: string;
  updatedAt?: string;
  ggId?: string;
  fbId?: string;
  provider?: string;
  _v?: number;
  _id?: string;
}

interface decodedType {
  exp?: number;
  iat?: string;
  payload?: {
    id: string;
    isAdmin: boolean;
  };
}

interface multiDatePickerProps {
  // selectedDates: Value[];
  onDatesChange: React.Dispatch<React.SetStateAction<Value[]>>;
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
  userCreateAdminForm,
  userUpdateAdminForm,
  profileForm,
  updatePasswordForm,
  userAdminFormProps,
  bookingForm,
  bookingHistoryColumn,
  refreshTokenApi,
  userType,
  responseType,
  signUpResData,
  signInResData,
  decodedType,
  userResData,
  booleanSetStateProps,
  multiDatePickerProps,
};
