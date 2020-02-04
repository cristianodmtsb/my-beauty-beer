import React from "react";

import Header from "../../../component/Header";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
}

export default DefaultLayout;
