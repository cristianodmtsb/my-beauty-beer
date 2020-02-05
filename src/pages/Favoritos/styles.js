import styled from "styled-components";

export const BeerTable = styled.table`
  width: 70%;
  margin: 3rem auto;
  background: #fff;
  border-radius: 4px;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }
  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }
  img {
    height: 100px;
  }
  strong {
    color: #333;
    display: block;
  }
  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;
