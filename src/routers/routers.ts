import config from "@/config";
import {
  AboutUsPage,
  AdminPage,
  ContactUsPage,
  HomePage,
  TourDetailPage,
  ToursPage,
} from "@/pages";
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
  // {
  //   path: config.routes.admin,
  //   page: AdminPage,
  //   title: config.titles.admin,
  //   layout: null,
  // },
];

export { publicRoutes };
