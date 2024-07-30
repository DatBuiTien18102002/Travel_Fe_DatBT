import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import "@/global.css";
import { DefaultLayout } from "@/layouts";
import { Helmet } from "react-helmet";
import { adminRoutes, publicRoutes } from "@/routers/routers";
import { routeProps, userType } from "@/types/types";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { AdminPage } from "@/pages";
import config from "@/config";
import { useDispatch, useSelector } from "react-redux";
import handleDecoded from "@/utils/jwtDecode";
import { useGetDetailUser } from "./react-query/userQuery.ts";
import { updateUser } from "@/redux/slice/userSlice";
import TourAdminForm from "@/forms/TourAdminForm";
import { LoadingPage, ScrollToTop } from "@/components";
import { AnimatePresence } from "framer-motion";

function App() {
  const dispatch = useDispatch();
  const loginUser = useSelector((state: { user: userType }) => state.user);
  const { pathname } = useLocation();

  const { storageData, decoded } = handleDecoded();

  const { data: detailUser, isLoading: loadingUser } = useGetDetailUser({
    id: decoded.payload?.id || "",
    token: storageData || "",
  });

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
                <ScrollToTop />

                <Helmet>
                  <title>{route.title}</title>
                </Helmet>
                <Page />
              </Fragment>
            ) : (
              <Layout>
                <ScrollToTop />
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

  useEffect(() => {
    if (decoded.payload?.id && detailUser?.data) {
      const storageRefreshToken = localStorage.getItem("refresh_token");
      const refreshToken = JSON.parse(storageRefreshToken || "");
      dispatch(
        updateUser({
          access_token: storageData,
          ...detailUser.data,
          refresh_token: refreshToken,
        })
      );
    }
  }, [storageData, decoded, detailUser, dispatch]);

  return (
    <div>
      <div
        className={`${
          pathname.split("/")[1] !== "admin" ? "max-w-[1600px]" : ""
        } mx-auto`}
      >
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />

          {[...handleRenderRoute(publicRoutes)]}

          {!loginUser._id && <Route path="/sign-up" element={<AuthLayout />} />}
          {!loginUser._id && <Route path="/sign-in" element={<AuthLayout />} />}

          {loginUser?.isAdmin && (
            <>
              <Route path="/admin/*" element={<AdminPage />}>
                {[...handleRenderRoute(adminRoutes)]}
                <Route index element={<Navigate to="dashboard" replace />} />
              </Route>

              <Route
                path={config.routes.newTourAdmin}
                element={
                  <Fragment>
                    <ScrollToTop />
                    <Helmet>
                      <title>{config.titles.newTourAdmin}</title>
                    </Helmet>
                    <TourAdminForm type="create" />
                  </Fragment>
                }
              />

              <Route
                path={config.routes.updateTourAdmin}
                element={
                  <Fragment>
                    <ScrollToTop />
                    <Helmet>
                      <title>{config.titles.updateTourAdmin}</title>
                    </Helmet>
                    <TourAdminForm type="update" />
                  </Fragment>
                }
              />
            </>
          )}
        </Routes>
      </div>

      <AnimatePresence>{loadingUser && <LoadingPage />}</AnimatePresence>
    </div>
  );
}

export default App;
