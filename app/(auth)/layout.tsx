import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return <div className="bg-slate-500">{children}</div>;
};

export default Layout;
