import PropTypes from "prop-types";

import React from "react";
import { Footer, Header } from "@/layouts/components";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />

      <div className="mt-[var(--header-height)">{children}</div>
      <Footer />
    </>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
