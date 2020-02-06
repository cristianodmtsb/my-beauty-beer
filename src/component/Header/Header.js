import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { MdFavoriteBorder } from "react-icons/md";
import { Container, Favoritos } from "./styles";
import logo from "../../assets/img/logo.png";

export default function HeaderComponent() {
  const favorite = useSelector(state => state.favorite.length);

  return (
    <Container>
      <Link to="/" className="logo">
        <img src={logo} alt="Monkey" />
      </Link>
      <Favoritos to="/linkes">
        <MdFavoriteBorder /> {favorite} Linkes
      </Favoritos>
    </Container>
  );
}
