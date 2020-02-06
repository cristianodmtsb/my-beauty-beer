import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.header`
  background-color: #333;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 15px;
  z-index: 99;
  position: relative;
  .logo {
    width: 220px;
  }
`;

export const Favoritos = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  svg {
    margin-right: 10px;
  }
`;
