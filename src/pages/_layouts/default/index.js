import React from "react";

import Header from "../../../component/Header";

import { Container } from "./styles";

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Container>
        <div>{children}</div>
      </Container>
    </>
  );
}

export default DefaultLayout;
