import React from "react";
import { Footer, Header } from "@/layouts/components";
import { layoutProps } from "@/types/types";

const DefaultLayout: React.FC<layoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default DefaultLayout;
