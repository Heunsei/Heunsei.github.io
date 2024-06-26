import React, { ReactNode } from "react";
import Navigator from "../components/Navigator";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps): React.JSX.Element => {
  return (
    <div className="main-container">
      <Navigator />
      {children}
    </div>
  );
};

export default MainLayout;
