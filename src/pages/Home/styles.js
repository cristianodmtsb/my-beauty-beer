import styled from "styled-components";
import { darken } from "polished";

export const BeerList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: square none;

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
      margin: 5px 0;
    }

    button {
      background-color: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background-color 0.2s;
      svg {
        padding: 12px;
        background: rgba(0, 0, 0, 0.2);
      }
      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
      &:hover {
        background-color: ${darken(0.05, "#7159c1")};
      }
    }
  }
`;
