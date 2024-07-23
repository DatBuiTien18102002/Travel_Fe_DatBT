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

interface tourAdminColumn extends Record<string, unknown> {
  key: string;
  id: string;
  avatar: string;
  name: string;
  price: number;
  discount: number;
  depart: string;
  destination: string;
  transport: string;
  timeTravel: string;
  maxSeat: number;
  currentSeat: number;
  dateStart: string[];
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

interface tourAdminForm {
  name?: string;
  photo?: string;
  price?: number;
  discount?: number;
  maxSeat?: number;
  depart?: string;
  destination?: string;
  dateStart?: (string | Value)[];
  timeTravel?: string;
  desc?: {
    introduce: string;
    overview: string;
    topic: string;
  };
  schedule: {
    title: string;
    desc: {
      timeOfDate: string;
      detail: string;
    }[];
  }[];
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

interface tourType {
  _id?: string;
  name?: string;
  photo?: string;
  price?: number;
  discount?: number;
  maxSeat?: number;
  transport?: string;
  depart?: string;
  destination?: string;
  dateStart?: string[];
  timeTravel?: string;
  desc?: {
    introduce: string;
    overview: string;
    topic: string;
  };
  schedule?: {
    title: string;
    desc: {
      timeOfDate: string;
      detail: string;
    }[];
  }[];
  rating?: number;
  numRate?: number;
  currentSeat?: number;
  availableSeat?: number;
  review?: {
    reviewId: string;
    userName: string;
    reviewText?: string;
    rating: number;
  };
}

interface bookingType {
  userId?: string;
  tourId?: string;
  seat?: {
    adultSeat: number;
    childSeat: number;
    babySeat: number;
    totalSeat: number;
  };
  price?: number;
  dateStart?: string;
  isRating?: boolean;
  status?: string;
  paidAt?: Date;
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

interface resGetToursType<dataType> {
  status: number;
  message?: string;
  data?: dataType[];
  currentPage?: number;
  totalPage?: number;
  totalTour?: number;
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
  defaultData?: string[];
  onDatesChange: React.Dispatch<React.SetStateAction<Value[]>>;
  error: string;
}

interface queryType {
  limit?: number | string;
  page?: number;
  _sort?: string;
  _order?: string;
  name?: string;
  timeTravel?: string;
  depart?: string;
  destination?: string;
}

interface tourSideBarProps {
  activeSort: string;
  activeFindTimeTravel: string | undefined;
  handleFindByTimeTravelClick: (type: string | undefined) => unknown;
  activeFindDepart: string | undefined;
  handleFindByDepartClick: (type: string | undefined) => unknown;
  findByDestination: string | undefined;
  findByDepart: string | undefined;
  findByTimeTravel: string | undefined;
  handleFindByDestinationClick: (type: string | undefined) => unknown;
  handleSortClick: (
    objectQuery: { nameSort: string; type: string },
    active: string | undefined
  ) => unknown;
  sortList: {
    title: string;
    name: string;
    type: string;
  }[];
  headingSort: {
    title: string;
    name: string;
  }[];
}

interface tourHeadingProps {
  currentPage: number;
  totalPage: number;
  handleNextPage: () => unknown;
  handlePrevPage: () => unknown;
  sortList: {
    title: string;
    options: { label: string; value: string }[];
  }[];
  handleSelectSortClick: (value: string) => unknown;
  handleSelectFilterClick: (value: string) => unknown;
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
  tourAdminColumn,
  userCreateAdminForm,
  userUpdateAdminForm,
  profileForm,
  updatePasswordForm,
  userAdminFormProps,
  bookingForm,
  bookingHistoryColumn,
  refreshTokenApi,
  userType,
  tourType,
  bookingType,
  responseType,
  signUpResData,
  signInResData,
  decodedType,
  userResData,
  booleanSetStateProps,
  multiDatePickerProps,
  tourAdminForm,
  queryType,
  resGetToursType,
  tourSideBarProps,
  tourHeadingProps,
};
