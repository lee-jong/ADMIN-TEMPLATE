import React, { ReactNode } from "react";
import Meta from "component/shared/Meta";
// 지금 딱히 필요 없네영~
// import Footer from "component/layout/Footer";

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      {children}
      {/* <Footer /> */}
    </>
  );
};

export default BaseLayout;
