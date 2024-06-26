import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@/global.css";
import { DefaultLayout } from "@/layouts";
import { Helmet } from "react-helmet";
import { publicRoutes } from "@/routers/routers";
import { routeProps } from "@/types/types";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { SignInForm, SignUpForm } from "@/forms";

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

        <Route element={<AuthLayout />}>
          <Route path="/sign-in" />
          <Route path="/sign-up" />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
