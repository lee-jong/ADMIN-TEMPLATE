import React, { ReactNode } from "react";
import Meta from "component/shared/Meta";

interface LayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: LayoutProps) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default BaseLayout;
