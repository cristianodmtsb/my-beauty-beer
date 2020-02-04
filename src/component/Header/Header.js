import React from "react";
import { Link } from "react-router-dom";

import { MdFavoriteBorder } from "react-icons/md";
import { Container, Favoritos } from "./styles";
import logo from "../../assets/img/logo.png";

export default function HeaderComponent() {
  return (
    <Container>
      <Link to="/" className="logo">
        <img src={logo} alt="Monkey" />
      </Link>
      <Favoritos to="/favoritos">
        <MdFavoriteBorder /> 15 Favoritos
      </Favoritos>
    </Container>
  );
}
