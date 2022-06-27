import Meta from "component/shared/Meta";
const BaseLayout = ({ children }: any) => {
  return (
    <>
      <Meta />
      {children}
    </>
  );
};

export default BaseLayout;
