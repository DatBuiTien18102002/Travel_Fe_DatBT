import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "@/global.css";
import { DefaultLayout } from "@/layouts";
import { Helmet } from "react-helmet";
import { publicRoutes } from "@/routers/routers";
import { routeProps, userType } from "@/types/types";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import { AdminPage, HomePage } from "@/pages";
import config from "@/config";
import { useDispatch, useSelector } from "react-redux";
import handleDecoded from "@/utils/jwtDecode";
import { useGetDetailUser } from "@/react-query/userQuery";
import { updateUser } from "@/redux/slice/userSlice";

function App() {
  const dispatch = useDispatch();
  const loginUser = useSelector((state: { user: userType }) => state.user);

  const { storageData, decoded } = handleDecoded();

  const { data: detailUser, isLoading: loadingUser } = useGetDetailUser({
    id: decoded.payload?.id || "",
    token: storageData || "",
  });

  console.log("data", detailUser);

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
      <div className="max-w-[1600px] mx-auto">
        <Routes>
          <Route path="/home" element={<Navigate to="/" />} />

          {[...handleRenderRoute(publicRoutes)]}

          <Route path="/sign-in" element={<AuthLayout />} />
          <Route path="/sign-up" element={<AuthLayout />} />
        </Routes>
      </div>

      {/* <Routes>
        <Route
          path={config.routes.admin}
          element={
            <Fragment>
              <Helmet>
                <title>{config.titles.admin}</title>
              </Helmet>
              <AdminPage />
            </Fragment>
          }
        />
      </Routes> */}
    </div>
  );
}

export default App;
