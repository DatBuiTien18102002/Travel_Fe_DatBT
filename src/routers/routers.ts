import config from "@/config";
import { AboutUsPage, HomePage } from "@/pages";
import { routeProps } from "@/types/types";

const publicRoutes: routeProps[] = [
  { path: config.routes.home, page: HomePage, title: config.titles.home },
  {
    path: config.routes.aboutUs,
    page: AboutUsPage,
    title: config.titles.aboutUs,
  },
];

export { publicRoutes };
