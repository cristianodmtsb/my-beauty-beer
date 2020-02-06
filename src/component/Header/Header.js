import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { MdFavoriteBorder } from "react-icons/md";
import { Container, Favoritos } from "./styles";
import logo from "../../assets/img/logo.png";

function HeaderComponent({ favorite }) {
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
export default connect(state => ({
  favorite: state.favorite.length
}))(HeaderComponent);
