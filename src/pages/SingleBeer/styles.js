import styled from "styled-components";
import { darken } from "polished";

export const Beer = styled.div`
  background-color: #fff;
  margin: 3em auto;
  border-radius: 4px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  .infos-top {
    display: flex;
    .thumb {
      max-width: 350px;
      width: 100%;
      text-align: center;
      background-color: #efefef;
      padding: 20px;
      border-radius: 4px;
      img {
        align-self: center;
        max-height: 350px;
      }
    }
    .infos {
      flex: 1;
      padding: 0 20px;
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 32px;
        color: #333;
      }
      h4 {
        font-size: 18px;
        color: #ccc;
        font-weight: 400;
        margin-bottom: 20px;
      }
      span {
        margin-bottom: 10px;
      }
      ul {
        margin-left: 35px;
      }
      button {
        background-color: #7159c1;
        color: #fff;
        border: 0;
        border-radius: 4px;
        margin-top: auto;
        max-width: 50%;

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
          text-transform: uppercase;
          padding: 10px 0 0 0;
        }
        &:hover {
          background-color: ${darken(0.05, "#7159c1")};
        }
      }
    }
  }
  .description {
    padding: 2rem 0;
    h3 {
      font-size: 22px;
      color: #333;
      margin-bottom: 20px;
    }
  }
`;
