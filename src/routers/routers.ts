import config from "@/config";
import { AboutUsPage, ContactUsPage, HomePage, ToursPage } from "@/pages";
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
];

export { publicRoutes };
