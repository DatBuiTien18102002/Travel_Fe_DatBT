import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@/global.css";
import { DefaultLayout } from "@/layouts";
import { Helmet } from "react-helmet";
import { publicRoutes } from "@/routers/routers";
import { routeProps } from "@/types/types";

function App() {
  const handleRenderRoute = (routes: routeProps[]) => {
    return routes.map((route, index) => {
      let Layout = DefaultLayout;
      const Page = route.page;

      if (route.layout) {
        Layout = route.layout;
      }

      return (
        <Route
          key={index}
          path={route.path}
          element={
            route.layout === null ? (
              <Fragment>
                <Helmet>
                  <title>{route.title}</title>
                </Helmet>
                <Page />
              </Fragment>
            ) : (
              <Layout>
                <Helmet>
                  <title>{route.title}</title>
                </Helmet>
                <Page />
              </Layout>
            )
          }
        />
      );
    });
  };

  return (
    <div className="max-w-[1600px] mx-auto">
      <Routes>
        <Route path="/home" element={<Navigate to="/" />} />

        {[...handleRenderRoute(publicRoutes)]}
      </Routes>
    </div>
  );
}

export default App;
