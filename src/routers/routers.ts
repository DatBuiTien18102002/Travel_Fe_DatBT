import config from "@/config";
import { HomePage } from "@/pages";
import { routeProps } from "@/types/types";

const publicRoutes: routeProps[] = [
  { path: config.routes.home, page: HomePage, title: config.titles.home },
];

export { publicRoutes };
