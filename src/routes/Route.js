import React from "react";
import { Route, Redirect } from "react-router-dom";

import { isAuthenticated } from "../services/auth";

import DefaultLayout from "../pages/_layouts/default";
import AuthLayout from "../pages/_layouts/auth";

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const auth = isAuthenticated() === null ? false : true;
  const signed = auth ? auth : false;

  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  if (!isPrivate && signed) {
    return <Redirect to="/dashboard" />;
  }

  const Layout = signed ? AuthLayout : DefaultLayout;

  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}
