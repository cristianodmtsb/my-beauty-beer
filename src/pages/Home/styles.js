import styled from "styled-components";
import { darken } from "polished";

export const BeerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: square none;
  padding: 3em 15px;

  li {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-height: 250px;
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      color: #333;
      margin-top: 10px;
    }
    > span {
      font-size: 15px;
      margin: 5px 0 15px;
    }
    .beerActions {
      display: flex;
      margin-top: auto;

      button,
      a {
        background-color: #b67f0b;
        color: #fff;
        border: 0;
        border-radius: 4px;

        display: flex;
        align-items: center;
        transition: background-color 0.2s;
        div {
          color: #fff;
          padding: 12px;
          background: rgba(0, 0, 0, 0.2);
        }
        span {
          flex: 1;
          text-align: center;
          font-weight: bold;
        }
        &:hover {
          background-color: ${darken(0.05, "#b67f0b")};
        }
      }
      a {
        background-color: #190101;
        flex: 1;
        margin-right: 5px;
        text-decoration: none;
        &:hover {
          background-color: ${darken(0.05, "#190101")};
        }
      }
    }
  }
`;
