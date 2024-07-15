import config from "@/config";

import {
  AboutUsPage,
  BookingPage,
  BookingSuccessPage,
  ContactUsPage,
  HomePage,
  ProfilePage,
  TourDetailPage,
  ToursPage,
  BookingHistoryPage,
  BookingHistoryDetailPage,
} from "@/pages";
import {
  BookingAdmin,
  Dashboard,
  TourAdmin,
  UserAdmin,
} from "@/pages/Admin/components";
import { routeProps } from "@/types/types";

const publicRoutes: routeProps[] = [
  { path: config.routes.home, page: HomePage, title: config.titles.home },
  {
    path: config.routes.aboutUs,
    page: AboutUsPage,
    title: config.titles.aboutUs,
  },
  {
    path: config.routes.contact,
    page: ContactUsPage,
    title: config.titles.contact,
  },
  {
    path: config.routes.tours,
    page: ToursPage,
    title: config.titles.tours,
  },
  {
    path: `${config.routes.tours}/tourDetail`,
    page: TourDetailPage,
    title: config.titles.tourDetail,
  },
  {
    path: config.routes.profile,
    page: ProfilePage,
    title: config.titles.profile,
  },
  {
    path: config.routes.booking,
    page: BookingPage,
    title: config.titles.booking,
  },
  {
    path: config.routes.bookingSuccess,
    page: BookingSuccessPage,
    title: config.titles.bookingSuccess,
  },
  {
    path: config.routes.bookingHistory,
    page: BookingHistoryPage,
    title: config.titles.bookingHistory,
  },
  {
    path: config.routes.bookingHistoryDetail,
    page: BookingHistoryDetailPage,
    title: config.titles.bookingHistoryDetail,
  },
];

const adminRoutes: routeProps[] = [
  {
    path: config.routes.dashboard,
    page: Dashboard,
    title: config.titles.dashboard,
    layout: null,
  },
  {
    path: config.routes.tourManage,
    page: TourAdmin,
    title: config.titles.tourManage,
    layout: null,
  },

  {
    path: config.routes.userManage,
    page: UserAdmin,
    title: config.titles.userManage,
    layout: null,
  },
  {
    path: config.routes.bookingManage,
    page: BookingAdmin,
    title: config.titles.bookingManage,
    layout: null,
  },
];

export { publicRoutes, adminRoutes };
